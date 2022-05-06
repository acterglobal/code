import { MiddlewareFn } from 'type-graphql'

import { sendJobsApiRequest } from '@acter/lib/api/send-jobs-api-request'
import { NotificationQueueType } from '@acter/lib/constants'
import { logger } from '@acter/lib/logger'

const l = logger.child({ label: 'QueueNotificationsMiddleware' })

export const QueueNotificationsMiddleware =
  (queueType: NotificationQueueType): MiddlewareFn =>
  async (_, next) => {
    const data = await next()

    if (!data?.id) {
      l.error('No ID to create notification', data)
      return
    }

    const timer = l.startTimer()

    sendJobsApiRequest({
      url: `/notify/${queueType}`,
      data: data,
    })
    timer.done({ message: 'Sent notifications job', queueType, data })
  }
