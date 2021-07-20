import 'reflect-metadata'
import { Job, Queue, Worker } from 'bullmq'
import prisma from '@acter/lib/prisma'
import { EMAIL_OUTBOX_QUEUE } from '@acter/lib/constants'
import { sendEmail, Email } from '@acter/lib/email'
import { Notification } from '@acter/schema/types'

export interface NotificationEmail extends Email {
  notification?: Notification
}

export const emailSendQueue = new Queue<NotificationEmail>(EMAIL_OUTBOX_QUEUE)

export const emailSendWorker = new Worker(
  EMAIL_OUTBOX_QUEUE,
  async (job: Job<NotificationEmail>) => {
    try {
      const res = await sendEmail(job.data)
      if (job.data.notification) {
        const notification = await prisma.notification.update({
          data: {
            sentAt: new Date(),
          },
          where: {
            id: job.data.notification.id,
          },
          select: {
            id: true,
            sentAt: true,
          },
        })
        return {
          ...res,
          notification,
        }
      }
      return res
    } catch (err) {
      console.error('Error sending message', job.data, err)
      throw err
    }
  },
  { concurrency: 50 }
)
