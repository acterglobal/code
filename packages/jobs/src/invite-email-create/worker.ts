import { InviteEmailCreate } from './types'
import { Job } from 'bullmq'

import {
  inviteEmailSendQueue,
  InviteEmailSend,
} from '@acter/jobs/src/invite-email-send'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { createWorker } from '@acter/lib/bullmq'
import { INVITE_EMAIL_CREATE } from '@acter/lib/constants'
import { createInviteEmail } from '@acter/lib/invites/email'
import { prisma } from '@acter/schema/prisma'

export const inviteEmailCreateWorker = createWorker(
  INVITE_EMAIL_CREATE,
  async (job: Job<InviteEmailCreate>) => {
    try {
      const {
        email,
        message,
        onActerId,
        createdByUserId,
        senderName,
      } = job.data

      const invitation = await prisma.invite.findFirst({
        where: { onActerId, email, createdByUserId },
      })
      const onActer = await prisma.acter.findFirst({ where: { id: onActerId } })
      const acterType = await prisma.acterType.findFirst({
        where: { id: onActer.acterTypeId },
      })

      const acterUrl = acterAsUrl({
        acter: { ...onActer, ActerType: acterType },
        includeBaseUrl: true,
      })

      const { html, text } = createInviteEmail({
        acterName: onActer.name,
        acterUrl,
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

      inviteEmailSendQueue.add(
        `invite-email-send-${invitation.id}`,
        { ...emailData },
        { removeOnComplete: true }
      )
    } catch (err) {
      console.error('Error sending message', job.data, err)
    }
  }
)
