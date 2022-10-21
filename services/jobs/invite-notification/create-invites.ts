import { sendEmail } from '@acter/lib/email'
import { getInviteUrl } from '@acter/lib/invites/get-invite-url'
import { prisma } from '@acter/schema/prisma'

import { createOneInviteEmail } from './template'
import { InviteEmailSend } from './types'
import { InviteEmailCreate } from './types'

export const createOneInviteNotification = async (
  job: InviteEmailCreate
): Promise<void> => {
  try {
    const { email, message, onActerId, senderName } = job

    const invitation = await prisma.invite.findFirst({
      where: {
        email,
        onActerId,
        expiredAt: { equals: null },
        acceptedAt: { equals: null },
      },
    })
    const onActer = await prisma.acter.findFirst({ where: { id: onActerId } })

    const inviteUrl = getInviteUrl(invitation.id)

    const { html, text } = createOneInviteEmail({
      acterName: onActer.name,
      inviteUrl,
      message,
      senderName,
    })

    const emailData: InviteEmailSend = {
      to: email,
      subject: `Your invitation to join ${onActer.name}`,
      html,
      text,
      invitationId: invitation.id,
    }

    await sendEmail(emailData)

    await prisma.invite.update({
      data: { sentAt: new Date() },
      where: { id: invitation.id },
    })
  } catch (err) {
    console.error('Error sending message', job, err)
  }
}
