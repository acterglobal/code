import axios from 'axios'
import { MiddlewareFn } from 'type-graphql'

import { NotificationQueueType } from '@acter/lib/constants'

export const QueueNotifications =
  (queueType: NotificationQueueType): MiddlewareFn =>
  async (_, next) => {
    const data = await next()

    if (!data?.id) {
      console.error('No ID to create notification', data)
      return
    }

    console.debug('Sending job notification', {
      jobId: data.id,
      queueType,
      data,
    })

    axios({
      method: 'POST',
      url: `${process.env.BASE_URL}/api/jobs/notify/${queueType}`,
      data: data,
    })
  }
