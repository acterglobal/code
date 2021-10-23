import { inviteEmailSendQueue } from '../invite-email-send'
import { InviteEmailCreate } from './types'
import { Job } from 'bullmq'

import { createWorker } from '@acter/lib/bullmq'
import { INVITE_EMAIL_CREATE } from '@acter/lib/constants'
import { prisma } from '@acter/schema/prisma'

export const inviteEmailCreateWorker = createWorker(
  INVITE_EMAIL_CREATE,
  async (job: Job<InviteEmailCreate>) => {
    try {
      const { id, email, message, onActerId } = job.data

      const onActer = await prisma.acter.findFirst({ where: { id: onActerId } })

      inviteEmailSendQueue.add(
        `new-invite-${id}`,
        {
          to: email,
          subject: `Invitation to Join Acter - ${onActer.name}`,
          text: message,
        },
        {
          removeOnComplete: true,
        }
      )
    } catch (err) {
      console.error('Error sending message', job.data, err)
    }
  }
)
