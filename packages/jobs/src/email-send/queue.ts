import { createQueue } from '@acter/lib/bullmq'
import { EMAIL_SEND_QUEUE } from '@acter/lib/constants'

export const emailSendQueue = createQueue(EMAIL_SEND_QUEUE)
