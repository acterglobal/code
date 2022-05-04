import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { ActerTypes } from '@acter/lib/constants'
import { logger } from '@acter/lib/logger'
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
import { NotificationEmail } from './send-notification-email'
import { sendNotificationEmail } from './send-notification-email'

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

interface CreateNotificationWorker<TVariables, TData> {
  /**
   * Hook to enhance Job data, perhaps querying DB for more data
   */
  getJobData?: (job: TVariables) => Promise<TData>
  /**
   * Get the the Acter we are following
   */
  getFollowing: (data: TData) => Promise<Acter>
  /**
   * Get the followers we will notify
   */
  getFollowersWhere?: (data: TData) => Prisma.ActerConnectionWhereInput
  /**
   * Get the html & text email text
   */
  getNotificationEmail: (
    props: NotificationEmailProps<TData>
  ) => CreateEmailReturn
  /**
   * Get the subject for this email
   */
  getNotificationEmailSubject: (props: NotificationEmailProps<TData>) => string
  /**
   * Optionally get Activity
   */
  getActivity?: (data: TData) => Activity
  /**
   * Optionally get Post
   */
  getPost?: (data: TData) => Post
  /**
   * The type of the notification
   */
  type: NotificationType
  /**
   * Url path for notification on
   */
  getNotificationUrlPath: (data?: string, following?: Acter) => string
}

const l = logger.child({
  label: 'createNotificationWorker',
})

export const createNotificationWorker =
  <TVariables, TData>({
    getJobData = async (job) => job as unknown as TData,
    getFollowing,
    getFollowersWhere = () => ({}),
    getNotificationEmail,
    getNotificationEmailSubject,
    getActivity,
    getPost,
    type,
    getNotificationUrlPath,
  }: CreateNotificationWorker<TVariables, TData>) =>
  async (job: TVariables & { id: string }): Promise<void> => {
    try {
      const timer = l.startTimer()
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
      l.debug('Sending notification followers', {
        followers: followers.map(
          ({
            Follower: {
              id,
              name,
              ActerType: { name: acterTypeName },
            },
          }) => ({ id, name, acterTypeName })
        ),
      })
      const activity = getActivity?.(data)
      if (activity) l.debug('Got activity', { activity })
      const post = getPost?.(data)
      if (post) l.debug('Got post', { post })

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
            const emailProps: NotificationEmailProps<TData> = {
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

            return sendNotificationEmail({
              ...emailData,
            })
          } else {
            l.debug('No email sent for notification', {
              notification,
            })
            return Promise.resolve()
          }
        })
      )
      timer.done({ message: 'Notification complete', job })
    } catch (e) {
      logger.error('Error processing job', {
        error: e,
      })
      throw e
    }
  }
