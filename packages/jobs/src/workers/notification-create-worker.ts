import 'reflect-metadata'
import { Job, Queue, Worker } from 'bullmq'
import prisma from '@acter/lib/prisma'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
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
import { emailSendQueue } from './email-send-worker'

export const notificationQueue = new Queue<Post>(NOTIFICATIONS_QUEUE)

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
          // Add it to the email outbox queue
          emailSendQueue.add(NotificationQueueType.SEND_EMAIL, {
            ...email,
            notification,
          })
        }
        return notification
      })
    )
    console.log('Notifications create complete', notifications)

    job.updateProgress({ state: NotificationJobState.FINISHED })
    return 'Notification job complete'
  },
  { concurrency: 50 }
)
