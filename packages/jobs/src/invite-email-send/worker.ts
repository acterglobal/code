import { Job } from 'bullmq'

import { createWorker } from '@acter/lib/bullmq'
import { INVITE_SEND_QUEUE } from '@acter/lib/constants'
import { sendEmail } from '@acter/lib/email'

export const inviteEmailSendWorker = createWorker(
  INVITE_SEND_QUEUE,
  async (job: Job) => {
    try {
      const res = await sendEmail(job.data)
      job.updateProgress({
        step: 'Email sent',
        sentTo: job.data.to,
      })
      return res
    } catch (err) {
      console.error('Error sending message', job.data, err)
    }
  }
)
