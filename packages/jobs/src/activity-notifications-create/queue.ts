import { ActivityNotification } from './types'

import { createQueue } from '@acter/lib/bullmq'
import { ACTIVITY_NOTIFICATIONS_CREATE } from '@acter/lib/constants'

export const activityNotificationsQueue = createQueue<ActivityNotification>(
  ACTIVITY_NOTIFICATIONS_CREATE
)
