import { MiddlewareFn } from 'type-graphql'
import { Queue } from 'bullmq'
import {
  NOTIFICATIONS_QUEUE,
  NotificationQueueType,
} from '@acter/lib/constants'

const notificationQueue = new Queue(NOTIFICATIONS_QUEUE)

export const queueNotificationsMiddleware =
  (type: NotificationQueueType): MiddlewareFn =>
  async (_, next) => {
    const result = await next()

    if (!result?.id) {
      console.error('No ID to create notification', result)
      return
    }

    console.log('Adding to notification queue', type, result)

    notificationQueue.add(type, result)
  }
