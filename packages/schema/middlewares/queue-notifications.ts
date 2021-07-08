import { MiddlewareFn } from 'type-graphql'
import { Queue } from 'bullmq'
import { NOTIFICATIONS_QUEUE, NotificationType } from '@acter/lib/constants'

type NotificationQueueMessage = {
  id: string
}
const notificationQueue = new Queue<NotificationQueueMessage>(
  NOTIFICATIONS_QUEUE
)

export const queueNotificationsMiddleware = (
  type: NotificationType
): MiddlewareFn => async (_, next) => {
  const result = await next()

  if (!result?.id) {
    console.error('No ID to create notification', result)
    return
  }

  notificationQueue.add(type, {
    id: result.id,
  })
}
