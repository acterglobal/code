import 'reflect-metadata'

import { dailyDigestQueue } from '../daily-digest/queue'
import { getDate, getMonth, getYear } from 'date-fns'

import { createWorker } from '@acter/lib/bullmq'
import { ActerTypes, DAILY_DIGEST_CRON } from '@acter/lib/constants'
import {
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
} from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

export const dailyDigestCronWorker = createWorker(
  DAILY_DIGEST_CRON,
  async (): Promise<void> => {
    // We should probably break this up into users by timezone at some point
    const now = new Date()
    const afterDateTime = new Date(
      getYear(now),
      getMonth(now),
      getDate(now),
      0,
      0,
      0,
      0
    )
    console.log('Looking for digest users for items after', afterDateTime)
    const digestUsers = await prisma.acter.findMany({
      include: {
        User: true,
      },
      where: {
        ActerType: {
          name: ActerTypes.USER,
        },
        acterNotifySetting: ActerNotificationSettings.ALL_ACTIVITY,
        acterNotifyEmailFrequency: ActerNotificationEmailFrequency.DAILY,
      },
    })

    digestUsers.forEach((acter) => {
      dailyDigestQueue.add(
        `digest-create-acter-${acter.id}`,
        {
          acter,
          afterDateTime,
        },
        {
          removeOnComplete: true,
        }
      )
    })
  }
)
