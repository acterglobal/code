import 'reflect-metadata'

import { activityNotificationsCreateWorker } from './activity-notifications-create/worker'
import { activityNotificationsOnActerCreate } from './activity-notifications-on-acter-create/worker'
import { dailyDigestCronQueue } from './daily-digest-cron/queue'
import { dailyDigestQueueScheduler } from './daily-digest-cron/scheduler'
import { dailyDigestCronWorker } from './daily-digest-cron/worker'
import { dailyDigestWorker } from './daily-digest/worker'
import { emailSendWorker } from './email-send/worker'
import { inviteEmailCreateWorker } from './invite-email-create/worker'
import { inviteEmailSendWorker } from './invite-email-send/worker'
import { newMemberJoinNotificationWorker } from './new-member-join-notification/worker'
import { postNotificationsCreateWorker } from './post-notification-create/worker'
import { syncAuth0IntercomDataWorker } from './sync-auth0-intercom-data/worker'

;(async () => {
  console.log('Starting all workers')
  ;[
    activityNotificationsCreateWorker,
    activityNotificationsOnActerCreate,
    dailyDigestCronWorker,
    dailyDigestWorker,
    emailSendWorker,
    inviteEmailCreateWorker,
    inviteEmailSendWorker,
    newMemberJoinNotificationWorker,
    postNotificationsCreateWorker,
    syncAuth0IntercomDataWorker,
  ].forEach((worker) => {
    worker.on('drained', () =>
      console.log(`No (more) jobs for ${worker.name} to complete. Ready...`)
    )

    worker.on('active', (job) => {
      console.log(`Working on ${job.id}:${job.name}`)
    })

    worker.on('progress', (job, progress) => {
      console.log(`Job ${job.id}:${job.name} progress: `, progress)
    })

    worker.on('completed', (job) => {
      console.log(
        `Completed work on job ${job.id}:${job.name} in ${
          job.finishedOn - job.timestamp
        }ms`
      )
    })

    worker.on('failed', (job, err) => {
      console.error(
        `Processing job failed ${job.id}:${job.name}: `,
        err.message
      )
      console.debug(err.stack)
    })

    worker.on('error', (err) => {
      console.error('Something went wrong: ', err.message)
    })
    worker.resume()
  })

  const dailyDigestCron = process.env.DAILY_DIGEST_CRON
  if (dailyDigestCron) {
    console.log(
      'Staring digest cron with cron of ',
      process.env.DAILY_DIGEST_CRON
    )
    await dailyDigestQueueScheduler.waitUntilReady()
    // Reset the Digest create cron job
    const repeatable = await dailyDigestCronQueue.getRepeatableJobs()
    await Promise.all(
      repeatable.map((job) => {
        console.log('Killing previous job', job)
        return dailyDigestCronQueue.removeRepeatableByKey(job.key)
      })
    )
    await dailyDigestCronQueue.drain()
    await dailyDigestCronQueue.add(
      'daily-digest-cron',
      {},
      {
        repeat: {
          cron: dailyDigestCron,
        },
      }
    )
  }
})()
