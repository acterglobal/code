import 'reflect-metadata'

import { ActerTypes } from '@acter/lib/constants'
import { prisma } from '@acter/schema/prisma'

import { createActerActivityNotifications } from './create-acter-activity-notifications'
import { ActerPickWithUser, ActivityPick } from './types'

export const createActivityFollowerNotifications = async (
  activity: ActivityPick
): Promise<void> => {
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
    createActerActivityNotifications({
      id: activity.id,
      acter,
      activity,
    })
  })
}
