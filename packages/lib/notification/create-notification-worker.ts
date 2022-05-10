import { Job, Worker } from 'bullmq'

import { emailSendQueue, NotificationEmail } from '@acter/jobs'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { createWorker } from '@acter/lib/bullmq'
import { ActerTypes } from '@acter/lib/constants'
import { getLogger } from '@acter/lib/logger'
import {
  Acter,
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
  ActerType,
  Activity,
  Notification,
  NotificationType,
  Post,
} from '@acter/schema'
import { prisma, Prisma } from '@acter/schema/prisma'

import { CreateEmailReturn, Email } from '../email'
import { createNotification } from './create-notification'

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
   * Optionally get Activity
   */
  getActivity?: (data: T) => Activity
  /**
   * Optionally get Post
   */
  getPost?: (data: T) => Post
  /**
   * The type of the notification
   */
  type: NotificationType
  /**
   * Url path for notification on
   */
  getNotificationUrlPath: (data?: string, following?: Acter) => string
}

const l = getLogger('createNotificationWorker')

export const createNotificationWorker = <T>({
  queue,
  getJobData = async (job) => job.data,
  getFollowing,
  getFollowersWhere = () => ({}),
  getNotificationEmail,
  getNotificationEmailSubject,
  getActivity,
  getPost,
  type,
  getNotificationUrlPath,
}: CreateNotificationWorker<T>): Worker => {
  return createWorker(queue, async (job: Job<T>) => {
    try {
      l.debug('Starting notification worker', { job })
      const data = await getJobData(job)
      l.debug('Got notification data', { data })
      const following = await getFollowing(data)
      l.debug('Got following', { following })
      const followersWhere = getFollowersWhere(data)
      l.debug('Got followersWhere', { followersWhere })
      const followers = await prisma.acterConnection.findMany({
        include: {
          Follower: {
            include: {
              ActerType: true,
              User: true,
            },
          },
        },
        where: {
          followingActerId: following.id,
          ...followersWhere,
          Follower: {
            ActerType: {
              ...(followersWhere?.Follower
                ?.ActerType as Prisma.ActerTypeWhereInput),
              name: ActerTypes.USER,
            },
            ...(followersWhere?.Follower as Prisma.ActerWhereInput),
            acterNotifySetting: ActerNotificationSettings.ALL_ACTIVITY,
            acterNotifyEmailFrequency: {
              not: ActerNotificationEmailFrequency.NEVER,
            },
          },
        },
      })
      l.debug(
        'Sending to followers',
        followers.map(
          ({
            Follower: {
              name,
              ActerType: { name: acterTypeName },
            },
          }) => ({ name, acterTypeName })
        )
      )
      const activity = getActivity?.(data)
      const post = getPost?.(data)

      const extraPath = getNotificationUrlPath(
        activity?.Acter.name || post?.parentId || post?.id,
        following
      )

      const url = acterAsUrl({
        acter:
          following.ActerType.name === ActerTypes.ACTIVITY
            ? following.Parent
            : following,
        includeBaseUrl: true,
        extraPath,
      })

      await Promise.all(
        followers.map(async ({ Follower }) => {
          const notification = await createNotification({
            ToActer: Follower,
            OnActer: following,
            url,
            type,
            Activity: activity,
            Post: post,
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
              notifications: notification,
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
    } catch (e) {
      l.error('Error processing job', {
        error: e,
      })
      throw e
    }
  })
}
