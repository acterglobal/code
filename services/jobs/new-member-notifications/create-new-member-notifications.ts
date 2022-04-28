import 'reflect-metadata'

import { createNotificationWorker } from '@acter/lib/notification/create-notification-worker'
import { ActerConnectionRole, NotificationType } from '@acter/schema'

import { createNewMemberNotificationEmail } from './template'
import { NewMemberJoinNotification } from './types'

export const createNewMemberNotifications = createNotificationWorker<
  NewMemberJoinNotification,
  NewMemberJoinNotification
>({
  getFollowing: async ({ Following }) => Following,
  getFollowersWhere: ({ Following }) => ({
    role: ActerConnectionRole.ADMIN,
    followingActerId: Following.id,
  }),
  getNotificationEmail: ({ data: { Follower: follower }, notification }) =>
    createNewMemberNotificationEmail({ follower, notification }),
  getNotificationEmailSubject: ({ notification }) =>
    `New member on ${notification.OnActer.name}`,
  type: NotificationType.NEW_MEMBER,
  getNotificationUrlPath: () => 'members',
})
