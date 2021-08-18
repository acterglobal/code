import 'reflect-metadata'
import { Job } from 'bullmq'
import prisma from '@acter/schema/prisma'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { createWorker } from '@acter/lib/bullmq'
import {
  ActerTypes,
  POST_NOTIFICATIONS_QUEUE,
  NotificationQueueType,
} from '@acter/lib/constants'
import { Email } from '@acter/lib/email'
import { createPostEmailNotification } from '@acter/lib/post/email'
import {
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
  NotificationType,
  Post,
} from '@acter/schema'
import { PostNotificationCreate } from './types'
import { NotificationEmail, emailSendQueue } from '../email-send'

export const postNotificationsCreateWorker = createWorker(
  POST_NOTIFICATIONS_QUEUE,
  async (job: Job<PostNotificationCreate>) => {
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
        id: job.data.post.id,
      },
    })

    const notify = post.Acter.Followers.filter(({ Follower }) => {
      // Only include Users who aren't the author and
      if (
        Follower.ActerType.name !== ActerTypes.USER ||
        Follower.id === post.authorId ||
        Follower.acterNotifySetting !== ActerNotificationSettings.ALL_ACTIVITY
      ) {
        return false
      }
      return true
    })

    job.updateProgress({
      step: 'notify list complete',
      count: notify.length,
    })

    const url = acterAsUrl({
      acter: post.Acter,
      extraPath: ['forum'],
      query: { postId: post.id },
      includeBaseUrl: true,
    })

    // Create the notification rows
    await Promise.all(
      notify.map(async ({ Follower }) => {
        const sendTo =
          Follower.acterNotifyEmailFrequency ===
          ActerNotificationEmailFrequency.INSTANT
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
        job.updateProgress({
          step: 'created user notification',
          notificationId: notification.id,
        })

        // If the user has requested it, send an email right away
        if (sendTo) {
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
          emailSendQueue.add(NotificationQueueType.SEND_EMAIL, data)
          job.updateProgress({
            step: 'sent email',
            notificationId: notification.id,
            email: sendTo,
          })
        }

        return notification
      })
    )
  }
)

const jobIdentifier = (job: Job<Post>) => {
  return `${job.id}:${job.name}:${job.data?.id}`
}

postNotificationsCreateWorker.on('drained', () =>
  console.log('No (more) jobs for notification worker to complete. Ready...')
)

postNotificationsCreateWorker.on('active', (job) => {
  console.log(`Working on ${jobIdentifier(job)}`)
})

postNotificationsCreateWorker.on('progress', (job, progress) => {
  console.log(`Job ${jobIdentifier(job)} progress: `, progress)
})

postNotificationsCreateWorker.on('completed', (job) => {
  console.log(`Completed work on job ${jobIdentifier(job)}`)
})

postNotificationsCreateWorker.on('failed', (job, err) => {
  console.error(`Processing job failed ${jobIdentifier(job)}: `, err.message)
})

postNotificationsCreateWorker.on('error', (err) => {
  console.error('Something went wrong: ', err.message)
})
