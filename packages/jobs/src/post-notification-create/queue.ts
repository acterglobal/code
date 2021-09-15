import { PostNotificationCreate } from './types'

import { createQueue } from '@acter/lib/bullmq'
import { POST_NOTIFICATIONS_QUEUE } from '@acter/lib/constants'

export const postNotificationCreateQueue = createQueue<PostNotificationCreate>(
  POST_NOTIFICATIONS_QUEUE
)
