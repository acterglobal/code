import 'reflect-metadata'
import { Job, Queue, Worker } from 'bullmq'
import prisma from '@acter/lib/prisma'
import {
  ActerTypes,
  EMAIL_OUTBOX_QUEUE,
  NOTIFICATIONS_QUEUE,
  NotificationJobState,
  NotificationQueueType,
} from '@acter/lib/constants'
import {
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
  NotificationType,
  Post,
} from '@acter/schema/types'

const emailOutboxQueue = new Queue(EMAIL_OUTBOX_QUEUE)

export const notificationCreateWorker = new Worker(
  NOTIFICATIONS_QUEUE,
  async (job: Job<Post>) => {
    console.log('Processing job: ', job.data)
    job.updateProgress({ state: NotificationJobState.STARTED })

    // First we want to find all the followers for the parent Acter
    const post = await prisma.post.findFirst({
      include: {
        Acter: {
          include: {
            Followers: {
              include: {
                Follower: {
                  include: {
                    ActerType: true,
                    User: true,
                  },
                },
              },
            },
          },
        },
      },
      where: {
        id: job.data.id,
      },
    })

    const notify = post.Acter.Followers.filter(({ Follower }) => {
      if (
        Follower.ActerType.name !== ActerTypes.USER ||
        Follower.id === post.authorId
      ) {
        return false
      }
      return true
    })

    // Create the notification rows
    const notifications = await Promise.all(
      notify.map(async ({ Follower }) => {
        console.log('Trying to create notification for ', Follower)
        const sendTo =
          Follower.acterNotifySetting === ActerNotificationSettings.ALL_ACTIVITY
            ? Follower.User.email
            : ''
        const notification = await prisma.notification.create({
          data: {
            type: NotificationType.NEW_POST,
            url: '',
            ToActer: { connect: { id: Follower.id } },
            OnActer: { connect: { id: post.Acter.id } },
            // // Only set the sendTo for acters who want it
            sendTo,
          },
          include: {
            ToActer: true,
            OnActer: {
              include: {
                ActerType: true,
              },
            },
          },
        })
        // If the user has requested it, send an email right away
        if (
          notification.ToActer.acterNotifySetting ===
            ActerNotificationSettings.ALL_ACTIVITY &&
          notification.ToActer.acterNotifyEmailFrequency ===
            ActerNotificationEmailFrequency.INSTANT
        )
          // Add it to the email outbox queue
          emailOutboxQueue.add(NotificationQueueType.SEND_EMAIL, notification)
        return notification
      })
    )
    console.log('Notifications create complete', notifications)

    job.updateProgress({ state: NotificationJobState.FINISHED })
    return 'Notification job complete'
  },
  { concurrency: 50 }
)

notificationCreateWorker.on('drained', () =>
  console.log('No (more) jobs for email worker to complete. Ready...')
)

notificationCreateWorker.on('active', (job) => {
  console.log(`Working on ${job.name}`)
})

notificationCreateWorker.on('progress', (job, progress) => {
  console.log(`Job ${job.name} progress: `, progress)
})

notificationCreateWorker.on('completed', (job) => {
  console.log(`Completed work on job ${job.name}`)
})

notificationCreateWorker.on('failed', (job) => {
  console.error(`Processing job failed ${job.name}: `, job)
})

notificationCreateWorker.on('error', (err) => {
  console.error('Something went wrong: ', err.message)
})
