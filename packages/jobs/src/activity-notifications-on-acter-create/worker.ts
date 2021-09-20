import 'reflect-metadata'

import { ActivityNotificationForActer } from './types'

import { createActivityNotificationEmail } from '@acter/lib/activity/email'
import { ACTIVITY_NOTIFICATIONS_CREATE_FOR_ACTER } from '@acter/lib/constants'
import { createNotificationWorker } from '@acter/lib/notification/create-notification-worker'
import { NotificationType } from '@acter/schema'

export const activityNotificationsOnActerCreate = createNotificationWorker<ActivityNotificationForActer>(
  {
    queue: ACTIVITY_NOTIFICATIONS_CREATE_FOR_ACTER,
    getFollowing: async ({ acter }) => acter,
    getFollowersWhere: ({ activity }) => ({
      Follower: {
        User: {
          id: {
            not: activity.createdByUserId,
          },
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
    notificationType: NotificationType.NEW_ACTIVITY,
    notificationUrlPath: 'activities',
  }
)
