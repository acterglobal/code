import 'reflect-metadata'
import { ACTIVITY_NOTIFICATIONS_CREATE_FOR_ACTER } from '@acter/lib/constants'
import { createActivityNotificationEmail } from '@acter/lib/activity/email'
import { createNotificationWorker } from '@acter/lib/notification/create-notification-worker'
import { ActivityNotificationForActer } from './types'

export const activityNotificationsOnActerCreate = createNotificationWorker<ActivityNotificationForActer>(
  {
    queue: ACTIVITY_NOTIFICATIONS_CREATE_FOR_ACTER,
    getFollowing: async ({ acter }) => acter,
    getFollowersWhere: ({ activity }) => ({
      Follower: {
        id: {
          not: activity.createdByUserId,
        },
      },
    }),
    getNotificationEmail: ({ data: { acter, activity }, notification }) =>
      createActivityNotificationEmail({
        acter,
        activity,
        notification,
      }),
    getNotificationEmailSubject: ({ data: { activity }, notification }) =>
      `New ${activity.ActivityType.name} on ${notification.OnActer.name} via Acter`,
  }
)
