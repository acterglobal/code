import { Job } from 'bullmq'

import { InviteEmailSend } from '@acter/jobs/src/invite-email-send'
import { createWorker } from '@acter/lib/bullmq'
import { INVITE_SEND_QUEUE } from '@acter/lib/constants'
import { sendEmail } from '@acter/lib/email'
import { prisma } from '@acter/schema/prisma'

export const inviteEmailSendWorker = createWorker(
  INVITE_SEND_QUEUE,
  async (job: Job<InviteEmailSend>) => {
    try {
      const res = await sendEmail(job.data)
      job.updateProgress({
        step: 'Email sent',
        sentTo: job.data.to,
      })

      const invite = await prisma.invite.update({
        data: { sentAt: new Date() },
        where: { id: job.data.invitationId },
      })

      return { ...res, invite }
    } catch (err) {
      console.error('Error sending message', job.data, err)
    }
  }
)
