import { Email } from '@acter/lib/email'

export type InviteEmailSend = Email & { invitationId: string }
