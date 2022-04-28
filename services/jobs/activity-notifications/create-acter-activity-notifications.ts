import 'reflect-metadata'

import slugify from 'slugify'

import { ACTIVITY_NOTIFICATIONS_CREATE_FOR_ACTER } from '@acter/lib/constants'
import { createNotificationWorker } from '@acter/lib/notification/create-notification-worker'
import { Activity, NotificationType } from '@acter/schema'

import { createActivityNotificationEmail } from './template'
import { ActivityNotificationForActer } from './types'

export const createActerActivityNotifications = createNotificationWorker<
  ActivityNotificationForActer,
  ActivityNotificationForActer
>({
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
  getActivity: ({ activity }) => activity as Activity,
  getNotificationEmail: ({ data: { acter, activity }, notification }) =>
    createActivityNotificationEmail({
      acter,
      activity,
      notification,
    }),
  getNotificationEmailSubject: ({ data: { activity }, notification }) =>
    `New ${activity.ActivityType.name} on ${notification.OnActer.name} via Acter`,
  type: NotificationType.NEW_ACTIVITY,
  getNotificationUrlPath: (activityName) =>
    `activities?activity=${slugify(activityName)}`,
})
