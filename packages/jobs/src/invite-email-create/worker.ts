import { InviteEmailCreate } from './types'
import { Job } from 'bullmq'

import { inviteEmailSendQueue } from '@acter/jobs/src/invite-email-send'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { createWorker } from '@acter/lib/bullmq'
import { INVITE_EMAIL_CREATE } from '@acter/lib/constants'
import { Email } from '@acter/lib/email'
import { createInviteEmail } from '@acter/lib/invites/email'
import { prisma } from '@acter/schema/prisma'

export const inviteEmailCreateWorker = createWorker(
  INVITE_EMAIL_CREATE,
  async (job: Job<InviteEmailCreate>) => {
    try {
      const { id, email, message, onActerId } = job.data

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
      })

      const emailData: Email = {
        to: email,
        subject: `Your invitation to join ${onActer.name}`,
        html,
        text,
      }

      inviteEmailSendQueue.add(
        `invite-email-send-${id}`,
        { ...emailData },
        { removeOnComplete: true }
      )
    } catch (err) {
      console.error('Error sending message', job.data, err)
    }
  }
)
