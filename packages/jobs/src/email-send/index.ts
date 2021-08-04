import 'reflect-metadata'
import { Job } from 'bullmq'
import { createWorker } from '@acter/lib/bullmq'
import prisma from '@acter/lib/prisma'
import { EMAIL_OUTBOX_QUEUE } from '@acter/lib/constants'
import { sendEmail, Email } from '@acter/lib/email'
import { Notification } from '@acter/schema/types'

export interface NotificationEmail extends Email {
  /**
   * Notification to close out on send success
   */
  notification?: Notification
}

export const emailSendWorker = createWorker(
  EMAIL_OUTBOX_QUEUE,
  async (job: Job<NotificationEmail>) => {
    try {
      const res = await sendEmail(job.data)
      console.log(`Email sent to ${job.data.to}`)
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
        console.log(
          `Notification ${notification.id} sentAt date updated to ${notification.sentAt}`
        )
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

emailSendWorker.on('drained', () =>
  console.log('No (more) jobs for email worker to complete. Ready...')
)

emailSendWorker.on('active', (job) => {
  console.log(`Working on ${job.id}:${job.name}`)
})

emailSendWorker.on('progress', (job, progress) => {
  console.log(`Job ${job.id}:${job.name} progress: `, progress)
})

emailSendWorker.on('completed', (job) => {
  console.log(`Completed work on job ${job.id}:${job.name}`)
})

emailSendWorker.on('failed', (job, err) => {
  console.error(`Processing job failed ${job.id}:${job.name}: `, err.message)
})

emailSendWorker.on('error', (err) => {
  console.error('Something went wrong: ', err.message)
})
