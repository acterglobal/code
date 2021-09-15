import { NotificationEmail } from './types'
import { Job } from 'bullmq'

import { createWorker } from '@acter/lib/bullmq'
import { EMAIL_SEND_QUEUE } from '@acter/lib/constants'
import { sendEmail } from '@acter/lib/email'
import { prisma } from '@acter/schema/prisma'

export const emailSendWorker = createWorker(
  EMAIL_SEND_QUEUE,
  async (job: Job<NotificationEmail>) => {
    try {
      const res = await sendEmail(job.data)
      job.updateProgress({
        step: 'Email sent',
        sentTo: job.data.to,
      })

      const sentAt = new Date()
      if (job.data.notification) {
        const notification = await prisma.notification.update({
          data: {
            sentAt,
          },
          where: {
            id: job.data.notification.id,
          },
          select: {
            id: true,
            sentAt: true,
          },
        })
        job.updateProgress({
          step: 'Notification updated',
          notificationId: notification.id,
        })
        return {
          ...res,
          notification,
        }
      }
      return res
    } catch (err) {
      console.error('Error sending message', job.data, err)
    }
  },
  { concurrency: 50 }
)
