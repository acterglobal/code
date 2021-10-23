import { InvitesSendEmail } from './types'

import { createQueue } from '@acter/lib/bullmq'
import { INVITE_SEND_QUEUE } from '@acter/lib/constants'

export const inviteEmailSendQueue = createQueue(INVITE_SEND_QUEUE)
