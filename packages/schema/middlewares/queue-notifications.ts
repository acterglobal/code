import { MiddlewareFn } from 'type-graphql'
import { NotificationQueueType } from '@acter/lib/constants'
import { notificationQueue } from '@acter/jobs/src/workers/notification-create-worker'

export const queueNotificationsMiddleware =
  (type: NotificationQueueType): MiddlewareFn =>
  async (_, next) => {
    const result = await next()

    if (!result?.id) {
      console.error('No ID to create notification', result)
      return
    }

    console.log('Adding to notification queue', type, result)

    notificationQueue.add(
      `create_notifications_for_${NotificationQueueType.NEW_POST}_${result.id}`,
      result
    )
  }
