import { sendEmail } from '@acter/lib/email'
import { getInviteUrl } from '@acter/lib/invites/get-invite-url'
import { prisma } from '@acter/schema/prisma'

import { createInviteEmail } from './template'
import { InviteEmailSend } from './types'
import { InviteEmailCreate } from './types'

export const createInviteNotification = async (
  job: InviteEmailCreate
): Promise<void> => {
  try {
    const { email, message, onActerId, createdByUserId, senderName } = job

    const invitation = await prisma.invite.findFirst({
      where: { onActerId, email, createdByUserId },
    })
    const onActer = await prisma.acter.findFirst({ where: { id: onActerId } })

    const inviteUrl = getInviteUrl(invitation.id)

    const { html, text } = createInviteEmail({
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
      data: { sentAt: new Date(), expiredAt: null },
      where: { id: invitation.id },
    })
  } catch (err) {
    console.error('Error sending message', job, err)
  }
}
