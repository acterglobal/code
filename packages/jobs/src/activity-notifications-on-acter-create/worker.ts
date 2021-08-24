import 'reflect-metadata'
import { Job } from 'bullmq'
import prisma from '@acter/schema/prisma'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { createWorker } from '@acter/lib/bullmq'
import {
  ActerTypes,
  ACTIVITY_NOTIFICATIONS_CREATE_FOR_ACTER,
  NotificationQueueType,
} from '@acter/lib/constants'
import { createActivityNotificationEmail } from '@acter/lib/activity/email'
import { Email } from '@acter/lib/email'
import { createNotification } from '@acter/lib/notification/create-notification'
import {
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
} from '@acter/schema/types'
import { ActivityNotificationForActer } from './types'
import { NotificationEmail, emailSendQueue } from '../email-send'

export const activityNotificationsOnActerCreate = createWorker(
  ACTIVITY_NOTIFICATIONS_CREATE_FOR_ACTER,
  async (job: Job<ActivityNotificationForActer>) => {
    const {
      data: { activity, acter },
    } = job

    // We need to get the User followers for this Acter that wish for immediate notification
    const users = await prisma.acterConnection.findMany({
      select: {
        Follower: {
          select: {
            id: true,
            name: true,
            acterNotifyEmailFrequency: true,
            User: {
              select: {
                email: true,
              },
            },
          },
        },
      },
      where: {
        followingActerId: acter.id,
        Follower: {
          id: {
            not: activity.createdByUserId,
          },
          ActerType: {
            name: ActerTypes.USER,
          },
          acterNotifySetting: ActerNotificationSettings.ALL_ACTIVITY,
          acterNotifyEmailFrequency: ActerNotificationEmailFrequency.INSTANT,
        },
      },
    })

    console.debug('Will send email to the following users:', users)

    const url = acterAsUrl({
      acter: activity.Acter,
      includeBaseUrl: true,
    })

    // Create the notification rows
    await Promise.all(
      users.map(async ({ Follower }) => {
        const notification = await createNotification(Follower, acter, url)
        // If the user has requested it, send an email right away
        if (notification.sendTo !== '') {
          // Create the email
          const { html, text } = createActivityNotificationEmail({
            acter,
            activity,
            notification,
          })
          const email: Email = {
            to: notification.sendTo,
            subject: `New ${activity.ActivityType.name} on ${notification.OnActer.name} via Acter`,
            text,
            html,
          }
          const data: NotificationEmail = {
            ...email,
            notification,
          }
          // Add it to the email outbox queue
          console.debug('Sending activity email', data)
          emailSendQueue.add(NotificationQueueType.SEND_EMAIL, data, {
            removeOnComplete: true,
          })
        }
        return
      })
    )
    return
  }
)

activityNotificationsOnActerCreate.on('drained', () =>
  console.log(
    'No (more) jobs for Activity Notifications on Acter worker to complete. Ready...'
  )
)

activityNotificationsOnActerCreate.on('active', (job) => {
  console.log(`Working on ${job.id}:${job.name}`)
})

activityNotificationsOnActerCreate.on('progress', (job, progress) => {
  console.log(`Job ${job.id}:${job.name} progress: `, progress)
})

activityNotificationsOnActerCreate.on('completed', (job) => {
  console.log(`Completed work on job ${job.id}:${job.name}`)
})

activityNotificationsOnActerCreate.on('failed', (job, err) => {
  console.error(
    `Processing job failed ${job.id}:${job.name}: `,
    err.message,
    err.stack
  )
})

activityNotificationsOnActerCreate.on('error', (err) => {
  console.error('Something went wrong: ', err.message)
})
