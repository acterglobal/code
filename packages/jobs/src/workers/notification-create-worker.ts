import 'reflect-metadata'
import { Job } from 'bullmq'
import prisma from '@acter/lib/prisma'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { createQueue, createWorker } from '@acter/lib/bullmq'
import {
  ActerTypes,
  NOTIFICATIONS_QUEUE,
  NotificationJobState,
  NotificationQueueType,
} from '@acter/lib/constants'
import { Email } from '@acter/lib/email'
import {
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
  NotificationType,
  Post,
} from '@acter/schema/types'
import { NotificationEmail, emailOutboxQueue } from './email-send-worker'

export const notificationQueue = createQueue(NOTIFICATIONS_QUEUE)

export const notificationCreateWorker = createWorker(
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
        ) {
          // Create the email
          // TODO: make it look ok
          const { OnActer } = notification
          const email: Email = {
            to: notification.sendTo,
            subject: `New post on ${OnActer.name} via Acter`,
            content: `A new post was created on an ${
              OnActer.ActerType.name
            } you follow on Acter, ${
              OnActer.name
            }. To see it, visit: http://localhost:3000${acterAsUrl(
              OnActer,
              'forum'
            )}`,
          }
          const data: NotificationEmail = {
            ...email,
            notification,
          }
          // Add it to the email outbox queue
          emailOutboxQueue.add(NotificationQueueType.SEND_EMAIL, data)
        }
        return notification
      })
    )
    console.log('Notifications create complete', notifications)

    job.updateProgress({ state: NotificationJobState.FINISHED })
    return 'Notification job complete'
  }
)

notificationCreateWorker.on('drained', () =>
  console.log('No (more) jobs for notification worker to complete. Ready...')
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
