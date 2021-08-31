import 'reflect-metadata'
import { Job } from 'bullmq'
import { getDate, getMonth, getYear } from 'date-fns'
import { prisma } from '@acter/schema/prisma'
import { createWorker } from '@acter/lib/bullmq'
import { ActerTypes, DAILY_DIGEST_CRON } from '@acter/lib/constants'
import {
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
} from '@acter/schema'
import { dailyDigestQueue } from '../daily-digest/queue'

export const dailyDigestCronWorker = createWorker(
  DAILY_DIGEST_CRON,
  async (job: Job): Promise<void> => {
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
      where: {
        ActerType: {
          name: ActerTypes.USER,
        },
        acterNotifySetting: ActerNotificationSettings.ALL_ACTIVITY,
        acterNotifyEmailFrequency: ActerNotificationEmailFrequency.DAILY,
      },
    })
    console.log('got list: ', digestUsers)

    digestUsers.forEach((acter) => {
      dailyDigestQueue.add(`digest-create-acter-${acter.id}`, {
        acter,
        afterDateTime,
      })
    })
  }
)
