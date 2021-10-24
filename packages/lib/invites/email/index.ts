import path from 'path'

import { CreateEmailReturn, createEmailTemplate } from '@acter/lib/email'

type InviteEmail = {
  acterName: string
  acterUrl: string
  parentActerName?: string
  senderName?: string
  message?: string
}

type CreateInviteEmailParams = InviteEmail

export const createInviteEmail = ({
  acterName,
  acterUrl,
  parentActerName,
  senderName,
  message = null,
}: CreateInviteEmailParams): CreateEmailReturn => {
  const html = createEmailTemplate<InviteEmail>(
    path.join(__dirname, 'template.hbs')
  )({
    acterName,
    acterUrl,
    parentActerName,
    senderName,
    message,
  })

  return { html, text: message }
}
