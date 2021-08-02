import { MiddlewareFn } from 'type-graphql'
import { postNotificationsQueue } from '@acter/jobs'
import { NotificationQueueType } from '@acter/lib/constants'

export const queueNotificationsMiddleware =
  (type: NotificationQueueType): MiddlewareFn =>
  async (_, next) => {
    const result = await next()

    if (!result?.id) {
      console.error('No ID to create notification', result)
      return
    }

    console.log('Adding to notification queue', type, result)

    postNotificationsQueue.add(type, result)
  }
