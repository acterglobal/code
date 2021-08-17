import { createQueue } from '@acter/lib/bullmq'
import { ACTIVITY_NOTIFICATIONS_CREATE_FOR_ACTER } from '@acter/lib/constants'
import { ActivityNotificationForActer } from './types'

export const activityNotificationsOnActerQueue =
  createQueue<ActivityNotificationForActer>(
    ACTIVITY_NOTIFICATIONS_CREATE_FOR_ACTER
  )
