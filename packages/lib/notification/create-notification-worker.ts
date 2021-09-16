import { CreateEmailReturn, Email } from '../email'
import { createNotification } from './create-notification'
import { Job, Worker } from 'bullmq'

import { emailSendQueue, NotificationEmail } from '@acter/jobs'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { createWorker } from '@acter/lib/bullmq'
import { ActerTypes } from '@acter/lib/constants'
import {
  Acter,
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
  ActerType,
  Notification,
  NotificationType,
} from '@acter/schema'
import { prisma, Prisma } from '@acter/schema/prisma'

export type FollowerType = Partial<Acter> &
  Required<
    Pick<Acter, 'acterNotifyEmailFrequency' | 'id' | 'name' | 'slug'> & {
      ActerType: ActerTypePick
    }
  >
type ActerTypePick = Required<Pick<ActerType, 'id' | 'name'>>

interface NotificationEmailProps<T> {
  data: T
  following: Pick<Acter, 'id' | 'name' | 'slug'>
  notification: Notification
}

interface CreateNotificationWorker<T> {
  /**
   * The name of the job queue
   */
  queue: string
  /**
   * Hook to enhance Job data, perhaps querying DB for more data
   */
  getJobData?: (job: Job<T>) => Promise<T>
  /**
   * Get the the Acter we are following
   */
  getFollowing: (data: T) => Promise<Acter>
  /**
   * Get the followers we will notify
   */
  getFollowersWhere?: (data: T) => Prisma.ActerConnectionWhereInput
  /**
   * Get the html & text email text
   */
  getNotificationEmail: (props: NotificationEmailProps<T>) => CreateEmailReturn
  /**
   * Get the subject for this email
   */
  getNotificationEmailSubject: (props: NotificationEmailProps<T>) => string
  /**
   * The type of the notification
   */
  notificationType: NotificationType
  /**
   * Extra path for notification
   */
  notificationUrlPath?: string | string[]
}

export const createNotificationWorker = <T>({
  queue,
  getJobData = async (job) => job.data,
  getFollowing,
  getFollowersWhere = () => ({}),
  getNotificationEmail,
  getNotificationEmailSubject,
  notificationType,
  notificationUrlPath = '',
}: CreateNotificationWorker<T>): Worker => {
  return createWorker(queue, async (job: Job<T>) => {
    const data = await getJobData(job)
    const following = await getFollowing(data)
    const followers = await prisma.acterConnection.findMany({
      select: {
        Follower: {
          select: {
            id: true,
            name: true,
            slug: true,
            acterNotifySetting: true,
            acterNotifyEmailFrequency: true,
            ActerType: true,
            User: true,
          },
        },
      },
      where: {
        followingActerId: following.id,
        Follower: {
          ActerType: {
            name: ActerTypes.USER,
          },
          acterNotifySetting: ActerNotificationSettings.ALL_ACTIVITY,
          acterNotifyEmailFrequency: ActerNotificationEmailFrequency.INSTANT,
        },
        ...getFollowersWhere(data),
      },
    })
    const url = acterAsUrl({
      acter: following,
      includeBaseUrl: true,
      extraPath: notificationUrlPath,
    })
    await Promise.all(
      followers.map(async ({ Follower }) => {
        const notification = await createNotification({
          toActer: Follower,
          onActer: following,
          url,
          notificationType,
        })

        if (notification.sendTo) {
          const emailProps: NotificationEmailProps<T> = {
            following,
            data,
            notification,
          }
          const { html, text } = getNotificationEmail(emailProps)
          const email: Email = {
            to: notification.sendTo,
            subject: getNotificationEmailSubject(emailProps),
            html,
            text,
          }
          const emailData: NotificationEmail = {
            ...email,
            notification,
          }
          emailSendQueue.add(
            `email-${queue}-notification-${notification.id}`,
            emailData,
            {
              removeOnComplete: true,
            }
          )
        }
      })
    )
  })
}
