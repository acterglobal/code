import 'reflect-metadata'

import { NewMemberJoinNotification } from './types'

import { createNewMemberNotificationEmail } from '@acter/lib/acter/email'
import { NEW_MEMBER_NOTIFICATION_QUEUE } from '@acter/lib/constants'
import { createNotificationWorker } from '@acter/lib/notification/create-notification-worker'
import { ActerConnectionRole, NotificationType } from '@acter/schema'

export const newMemberJoinNotificationWorker = createNotificationWorker<NewMemberJoinNotification>(
  {
    queue: NEW_MEMBER_NOTIFICATION_QUEUE,
    getFollowing: async ({ connection }) => connection.Following,
    getFollowersWhere: ({ connection }) => ({
      role: ActerConnectionRole.ADMIN,
      followingActerId: connection.followingActerId,
    }),
    getNotificationEmail: ({
      data: {
        connection: { Follower: follower },
      },
      notification,
    }) => createNewMemberNotificationEmail({ follower, notification }),
    getNotificationEmailSubject: ({ notification }) =>
      `New member on ${notification.OnActer.name}`,
    type: NotificationType.NEW_MEMBER,
    getNotificationUrlPath: () => 'members',
  }
)
