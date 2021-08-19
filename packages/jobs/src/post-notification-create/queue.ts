import { POST_NOTIFICATIONS_QUEUE } from '@acter/lib/constants'
import { createQueue } from '@acter/lib/bullmq'
import { PostNotificationCreate } from './types'

export const postNotificationCreateQueue = createQueue<PostNotificationCreate>(
  POST_NOTIFICATIONS_QUEUE
)
