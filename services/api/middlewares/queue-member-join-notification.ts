import { MiddlewareFn } from 'type-graphql'

import { newMemberJoinNotificationQueue } from '@acter/jobs-old'
import { ActerTypes } from '@acter/lib/constants'

export const QueueNewMemberJoinNotification: MiddlewareFn = async (_, next) => {
  const connection = await next()

  if (connection.Follower.ActerType.name === ActerTypes.USER) {
    newMemberJoinNotificationQueue.add(`new-member-${connection.id}`, {
      connection,
    })
  }
}
