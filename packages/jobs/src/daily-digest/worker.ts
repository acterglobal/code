import 'reflect-metadata'
import { Job } from 'bullmq'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
import { prisma } from '@acter/schema/prisma'
import { createWorker } from '@acter/lib/bullmq'
import {
  ActerTypes,
  DAILY_DIGEST_CREATE,
  DATE_FORMAT_SHORT,
} from '@acter/lib/constants'
import { createActivityNotificationEmail } from '@acter/lib/activity/email'
import { DailyDigest } from './types'
import { Acter } from '@acter/schema'

export const dailyDigestWorker = createWorker(
  DAILY_DIGEST_CREATE,
  async (job: Job<DailyDigest>) => {
    const {
      data: { acter, afterDateTime },
    } = job
    const formattedAfterDateTime = parseAndFormat(
      afterDateTime,
      DATE_FORMAT_SHORT
    )
    // Get all the Acters and Activities this user is following
    const following = await prisma.acterConnection.findMany({
      include: {
        Following: {
          include: {
            ActerType: true,
          },
        },
      },
      where: {
        followerActerId: acter.id,
      },
    })

    await Promise.all(
      following.map(async ({ Following }) => {
        const [posts, activities] = await Promise.all([
          // Get recent posts
          getPosts({ acter: Following, afterDateTime }),
          // Get newly followed Activities
          getActivities({ acter: Following, afterDateTime }),
        ])

        console.log(
          `Here is the news for ${Following.ActerType.name} ${Following.name} for ${formattedAfterDateTime}`
        )
        posts && console.log(posts.join('\n'))
        activities && console.log(activities.join('\n'))
      })
    )
  }
)

interface GetForActerParams {
  /**
   * The Acter or Activity for which we are getting attached items
   */
  acter: Acter
  /**
   * Date after which we are fetching posts
   */
  afterDateTime: Date
}

type GetForActerResult = Array<string> | false

/**
 * Get all the Posts for a give Acter or Activity
 * @param params GetForActer params
 * @returns
 */
const getPosts = async ({
  acter,
  afterDateTime,
}: GetForActerParams): Promise<GetForActerResult> => {
  const posts = await prisma.post.findMany({
    include: {
      Author: true,
    },
    where: {
      acterId: acter.id,
      createdAt: {
        gte: afterDateTime,
      },
    },
  })
  return posts.map(
    (post) =>
      `${post.Author.name} created a new post on an ${acter.ActerType.name} you follow on Acter, ${acter.name}.`
  )
}

/**
 *
 * @param params GetForActer params
 * @returns
 */
const getActivities = async ({
  acter,
  afterDateTime,
}: GetForActerParams): Promise<GetForActerResult> => {
  if (acter.ActerType.name === ActerTypes.ACTIVITY) return false
  const activities = await prisma.acterConnection.findMany({
    include: {
      Following: {
        include: {
          Activity: true,
        },
      },
    },
    where: {
      followerActerId: acter.id,
      Following: {
        ActerType: {
          name: ActerTypes.ACTIVITY,
        },
      },
      // TODO: we *might* want to do this on the Acter instead of the connection
      createdAt: {
        gte: afterDateTime,
      },
    },
  })

  return activities.map(
    ({ Following }) =>
      `A new activity titled "${Following.name} was added on an ${acter.ActerType.name} you follow on Acter, ${acter.name}.`
  )
}
