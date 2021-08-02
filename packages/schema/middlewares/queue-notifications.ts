import { MiddlewareFn } from 'type-graphql'
import { NotificationQueueType } from '@acter/lib/constants'
import { createQueue } from '@acter/lib/bullmq'
import { POST_NOTIFICATIONS_QUEUE } from '@acter/lib/constants'

export const postNotificationsQueue = createQueue(POST_NOTIFICATIONS_QUEUE)

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
