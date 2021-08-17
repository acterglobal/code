import { createQueue } from '@acter/lib/bullmq'
import { EMAIL_SEND_QUEUE } from '@acter/lib/constants'
import { NotificationEmail } from './types'

export const emailSendQueue = createQueue<NotificationEmail>(EMAIL_SEND_QUEUE)
