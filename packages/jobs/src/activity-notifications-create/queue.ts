import { createQueue } from '@acter/lib/bullmq'
import { ACTIVITY_NOTIFICATIONS_CREATE } from '@acter/lib/constants'
import { ActivityNotification } from './types'

export const activityNotificationsQueue = createQueue<ActivityNotification>(
  ACTIVITY_NOTIFICATIONS_CREATE
)
