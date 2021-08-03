import 'reflect-metadata'
import { Job } from 'bullmq'
import prisma from '@acter/lib/prisma'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { createQueue, createWorker } from '@acter/lib/bullmq'
import {
  ActerTypes,
  EMAIL_OUTBOX_QUEUE,
  POST_NOTIFICATIONS_QUEUE,
  NotificationJobState,
  NotificationQueueType,
} from '@acter/lib/constants'
import { Email } from '@acter/lib/email'
import { createPostEmailNotification } from '@acter/lib/post/email'
import {
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
  NotificationType,
  Post,
} from '@acter/schema/types'
import { NotificationEmail } from '../email-send'

const emailOutboxQueue = createQueue(EMAIL_OUTBOX_QUEUE)

export const postNotificationsCreateWorker = createWorker(
  POST_NOTIFICATIONS_QUEUE,
  async (job: Job<Post>) => {
    console.log('Processing job: ', job.data)
    job.updateProgress({ state: NotificationJobState.STARTED })

    // First we want to find all the followers for the parent Acter
    const post = await prisma.post.findFirst({
      include: {
        Acter: {
          include: {
            ActerType: true,
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
        Author: true,
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

    const url = acterAsUrl({
      acter: post.Acter,
      extraPath: ['forum'],
      query: { postId: post.id },
      includeBaseUrl: true,
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
            url,
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
          const { html, text } = createPostEmailNotification({
            notification,
            post,
          })
          const email: Email = {
            to: notification.sendTo,
            subject: `New post on ${notification.OnActer.name} via Acter`,
            text,
            html,
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

postNotificationsCreateWorker.on('drained', () =>
  console.log('No (more) jobs for notification worker to complete. Ready...')
)

postNotificationsCreateWorker.on('active', (job) => {
  console.log(`Working on ${job.name}`)
})

postNotificationsCreateWorker.on('progress', (job, progress) => {
  console.log(`Job ${job.name} progress: `, progress)
})

postNotificationsCreateWorker.on('completed', (job) => {
  console.log(`Completed work on job ${job.name}`)
})

postNotificationsCreateWorker.on('failed', (job, err) => {
  console.error(`Processing job failed ${job.name}: `)
  console.trace(err)
})

postNotificationsCreateWorker.on('error', (err) => {
  console.error('Something went wrong: ', err.message)
})
