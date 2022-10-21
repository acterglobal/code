import 'reflect-metadata'

import { createOneNotificationWorker } from '@acter/lib/notification/create-notification-worker'
import { ActerConnectionRole, NotificationType } from '@acter/schema'

import { createNewMemberNotificationEmail } from './template'
import { NewMemberJoinNotification } from './types'

export const createNewMemberNotifications = createOneNotificationWorker<
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
