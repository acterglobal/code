import { Job } from 'bullmq'
import { createWorker } from '@acter/lib/bullmq'
import prisma from '@acter/schema/prisma'
import { EMAIL_SEND_QUEUE } from '@acter/lib/constants'
import { sendEmail } from '@acter/lib/email'
import { NotificationEmail } from './types'

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
