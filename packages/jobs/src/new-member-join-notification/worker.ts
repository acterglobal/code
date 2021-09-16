import 'reflect-metadata'

import { NewMemberJoinNotification } from './types'

import { createNewMemberNotificationEmail } from '@acter/lib/acter/email'
import { ActerTypes, NEW_MEMBER_NOTIFICATION_QUEUE } from '@acter/lib/constants'
import { createNotificationWorker } from '@acter/lib/notification/create-notification-worker'
import { ActerConnectionRole, NotificationType } from '@acter/schema'

export const newMemberJoinNotificationWorker = createNotificationWorker<NewMemberJoinNotification>(
  {
    queue: NEW_MEMBER_NOTIFICATION_QUEUE,
    getFollowing: async ({ connection }) => connection.Following,
    getFollowersWhere: ({ connection }) => ({
      Follower: {
        ActerType: {
          name: ActerTypes.USER,
        },
      },
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
    notificationType: NotificationType.NEW_MEMBER,
    notificationUrlPath: 'members',
  }
)
