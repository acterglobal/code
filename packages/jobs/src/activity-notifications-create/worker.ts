import 'reflect-metadata'
import { Job } from 'bullmq'
import prisma from '@acter/schema/prisma'
import { createWorker } from '@acter/lib/bullmq'
import { ActerTypes, ACTIVITY_NOTIFICATIONS_CREATE } from '@acter/lib/constants'
import { activityNotificationsOnActerQueue } from '@acter/jobs/src/activity-notifications-on-acter-create'
import { ActivityNotification } from './types'
import { ActerPickWithUser } from '../activity-notifications-on-acter-create'

export const activityNotificationsCreateWorker = createWorker(
  ACTIVITY_NOTIFICATIONS_CREATE,
  async (job: Job<ActivityNotification>) => {
    const {
      data: { activity },
    } = job

    // For each Acter that set as a follower of this Activity, send notifications to their users

    // First, get the non-User follower acters
    const followers = await prisma.acterConnection.findMany({
      select: {
        Follower: {
          select: {
            id: true,
            name: true,
            slug: true,
            acterNotifyEmailFrequency: true,
            ActerType: {
              select: {
                id: true,
                name: true,
              },
            },
            User: {
              select: {
                id: true,
                email: true,
              },
            },
          },
        },
      },
      where: {
        Following: {
          id: activity.acterId,
          ActerType: {
            name: {
              not: ActerTypes.USER,
            },
          },
        },
      },
    })

    console.debug('Will try to send to the following: ', followers)

    // Now create a job to email the users for each follower
    followers.forEach(({ Follower }) => {
      const acter = Follower as ActerPickWithUser
      activityNotificationsOnActerQueue.add(
        `activity-${activity.id}-notification-acter-${acter.id}`,
        {
          acter,
          activity,
        },
        {
          removeOnComplete: true,
        }
      )
    })
  }
)

activityNotificationsCreateWorker.on('drained', () =>
  console.log('No (more) jobs for notification worker to complete. Ready...')
)

activityNotificationsCreateWorker.on('active', (job) => {
  console.log(`Working on ${job.id}:${job.name}`)
})

activityNotificationsCreateWorker.on('progress', (job, progress) => {
  console.log(`Job ${job.id}:${job.name} progress: `, progress)
})

activityNotificationsCreateWorker.on('completed', (job) => {
  console.log(`Completed work on job ${job.id}:${job.name}`)
})

activityNotificationsCreateWorker.on('failed', (job, err) => {
  console.error(`Processing job failed ${job.id}:${job.name}: `, err.message)
})

activityNotificationsCreateWorker.on('error', (err) => {
  console.error('Something went wrong: ', err.message)
})