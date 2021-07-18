import 'reflect-metadata'
import { Job, Worker } from 'bullmq'
import prisma from '@acter/lib/prisma'
import { NotificationJobState, EMAIL_OUTBOX_QUEUE } from '@acter/lib/constants'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { sendEmail } from '@acter/lib/email'
import { Notification } from '@acter/schema/types'

export const emailSendWorker = new Worker(
  EMAIL_OUTBOX_QUEUE,
  async (job: Job<Notification>) => {
    console.log('Processing job: ', job.data)
    job.updateProgress({ state: NotificationJobState.STARTED })

    try {
      const { OnActer } = job.data
      const res = await sendEmail({
        to: job.data.sendTo,
        subject: `New post on ${OnActer.name} via Acter`,
        content: `A new post was created on an ${
          OnActer.ActerType.name
        } you follow on Acter, ${
          OnActer.name
        }. To see it, visit: http://localhost:3000${acterAsUrl(
          OnActer,
          'forum'
        )}`,
      })
      console.log('Email sent successfully: ', res)
      return await prisma.notification.update({
        data: {
          sentAt: new Date(),
        },
        where: {
          id: job.data.id,
        },
      })
    } catch (err) {
      console.error('Error sending message', job.data, err)
    }
  }
)

emailSendWorker.on('drained', () =>
  console.log('No (more) jobs for email worker to complete. Ready...')
)

emailSendWorker.on('active', (job) => {
  console.log(`Working on ${job.name}`)
})

emailSendWorker.on('progress', (job, progress) => {
  console.log(`Job ${job.name} progress: `, progress)
})

emailSendWorker.on('completed', (job) => {
  console.log(`Completed work on job ${job.name}`)
})

emailSendWorker.on('failed', (job) => {
  console.error(`Processing job failed ${job.name}: `, job)
})

emailSendWorker.on('error', (err) => {
  console.error('Something went wrong: ', err.message)
})
