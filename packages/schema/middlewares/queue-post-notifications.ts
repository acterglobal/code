import { MiddlewareFn } from 'type-graphql'

import { postNotificationCreateQueue } from '@acter/jobs'
import { NotificationQueueType } from '@acter/lib/constants'

export const QueuePostNotifications = (
  type: NotificationQueueType
): MiddlewareFn => async (_, next) => {
  const result = await next()

  if (!result?.id) {
    console.error('No ID to create notification', result)
    return
  }

  /* eslint-disable-next-line no-console */
  console.log('Adding to notification queue', type, result)

  postNotificationCreateQueue.add(type, { [type]: result })
}
