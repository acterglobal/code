import path from 'path'

import { CreateEmailReturn, createEmailTemplate } from '@acter/lib/email'

type InviteEmail = {
  acterName: string
  inviteUrl: string
  parentActerName?: string
  senderName?: string
  message?: string
}

type CreateInviteEmailParams = InviteEmail

export const createInviteEmail = ({
  acterName,
  inviteUrl,
  parentActerName,
  senderName,
  message = null,
}: CreateInviteEmailParams): CreateEmailReturn => {
  const html = createEmailTemplate<InviteEmail>(
    path.join(__dirname, 'template.hbs')
  )({
    acterName,
    inviteUrl,
    parentActerName,
    senderName,
    message,
  })

  return { html, text: message }
}
