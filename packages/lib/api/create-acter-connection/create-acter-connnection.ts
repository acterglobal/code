import { getLogger } from '@acter/lib/logger'
import {
  ActerConnection,
  ActerConnectionRole,
  ActerJoinSettings,
} from '@acter/schema'
import { PrismaClient } from '@acter/schema/prisma'

interface CreateActerConnectionProps {
  prisma: PrismaClient
  followerActerId: string
  followingActerId: string
  createdByUserId: string
  role?: ActerConnectionRole
}

const l = getLogger('createActerConnection')

export const createActerConnection = async ({
  prisma,
  followerActerId,
  followingActerId,
  createdByUserId,
  role,
}: CreateActerConnectionProps): Promise<ActerConnection> => {
  const followingActer = await prisma.acter.findFirst({
    select: {
      id: true,
      acterJoinSetting: true,
    },
    where: { id: followingActerId },
  })
  if (!followingActer) {
    const err = 'No user found'
    l.warn(err)
    throw err
  }

  const getDefaultRole = () =>
    followingActer.acterJoinSetting === ActerJoinSettings.EVERYONE
      ? ActerConnectionRole.MEMBER
      : ActerConnectionRole.PENDING

  const connection = await prisma.acterConnection.upsert({
    include: {
      Follower: {
        include: {
          ActerType: true,
        },
      },
      Following: {
        include: {
          ActerType: true,
        },
      },
    },
    create: {
      followerActerId,
      followingActerId,
      role: role || getDefaultRole(),
      createdByUserId,
    },
    update: {},
    where: {
      acter_follower_following: {
        followerActerId,
        followingActerId,
      },
    },
  })
  l.debug({ connection, msg: 'connection created' })
  return connection
}
