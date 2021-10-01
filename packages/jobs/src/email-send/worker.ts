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
      if (job.data.notifications) {
        const notifications = Array.isArray(job.data.notifications)
          ? job.data.notifications
          : [job.data.notifications]
        const notificationIds = notifications.map(({ id }) => id)
        const notification = await prisma.notification.updateMany({
          data: {
            sentAt,
          },
          where: {
            id: {
              in: notificationIds,
            },
          },
        })
        job.updateProgress({
          step: 'Notifications updated',
          sentAt,
          notificationIds,
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
