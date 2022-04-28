import { emailSendWorker, NotificationEmail } from '@acter/jobs-old'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { ActerTypes } from '@acter/lib/constants'
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
  async (job: TVariables): Promise<void> => {
    const data = await getJobData(job)
    const following = await getFollowing(data)
    const followersWhere = getFollowersWhere(data)
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
    console.log(
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

          emailSendWorker({
            ...emailData,
          })
        }
      })
    )
  }
