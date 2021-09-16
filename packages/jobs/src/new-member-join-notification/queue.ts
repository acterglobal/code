import { createQueue } from '@acter/lib/bullmq'
import { NEW_MEMBER_NOTIFICATION_QUEUE } from '@acter/lib/constants'
import { NewMemberJoinNotification } from './types'

export const newMemberJoinNotificationQueue = createQueue<NewMemberJoinNotification>(
  NEW_MEMBER_NOTIFICATION_QUEUE
)
