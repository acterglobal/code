import 'reflect-metadata'

import { ActerPickWithUser } from '../activity-notifications-on-acter-create'
import { ActivityNotification } from './types'
import { Job } from 'bullmq'

import { activityNotificationsOnActerQueue } from '@acter/jobs/src/activity-notifications-on-acter-create'
import { createWorker } from '@acter/lib/bullmq'
import { ActerTypes, ACTIVITY_NOTIFICATIONS_CREATE } from '@acter/lib/constants'
import { prisma } from '@acter/schema/prisma'

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