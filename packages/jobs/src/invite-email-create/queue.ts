import { InviteEmailCreate } from './types'

import { createQueue } from '@acter/lib/bullmq'
import { INVITE_EMAIL_CREATE } from '@acter/lib/constants'

export const inviteEmailCreateQueue = createQueue<InviteEmailCreate>(
  INVITE_EMAIL_CREATE
)
