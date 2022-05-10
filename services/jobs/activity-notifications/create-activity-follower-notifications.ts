import 'reflect-metadata'

import { ActerTypes } from '@acter/lib/constants'
import { getLogger } from '@acter/lib/logger'
import { prisma } from '@acter/schema/prisma'

import { createActerActivityNotifications } from './create-acter-activity-notifications'
import { ActerPickWithUser, ActivityPick } from './types'

const l = getLogger('createActivityFollowerNotifications')

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
      },
      Follower: {
        ActerType: {
          name: {
            not: ActerTypes.USER,
          },
        },
      },
    },
  })

  l.debug('Got followers', followers)

  // Now create a job to email the users for each follower
  await Promise.all(
    followers.map(async ({ Follower }) => {
      const acter = Follower as ActerPickWithUser
      return createActerActivityNotifications({
        id: activity.id,
        acter,
        activity,
      })
    })
  )
}
