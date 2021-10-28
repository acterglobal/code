import { InviteEmailSend } from './types'

import { createQueue } from '@acter/lib/bullmq'
import { INVITE_SEND_QUEUE } from '@acter/lib/constants'

export const inviteEmailSendQueue = createQueue<InviteEmailSend>(
  INVITE_SEND_QUEUE
)
