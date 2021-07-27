import { MiddlewareFn } from 'type-graphql'
import { notificationQueue } from '@acter/jobs/src/workers/notification-create-worker'
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

    notificationQueue.add(type, result)
  }
