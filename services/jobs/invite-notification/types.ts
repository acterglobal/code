import { Email } from '@acter/lib/email'
import { Invite } from '@acter/schema'

export type InviteEmailSend = Email & { invitationId: string }

export type InviteEmailCreate = Invite & {
  senderName: string
}
