import 'reflect-metadata'

import { getDate, getMonth, getYear } from 'date-fns'

import { ActerTypes } from '@acter/lib/constants'
import { getLogger } from '@acter/lib/logger'
import {
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
} from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

import { createDailyDigest } from './create-daily-digest'

const l = getLogger('dailyDigestCronWorker')

export const dailyDigestCronWorker = async (): Promise<void> => {
  // TODO: We should probably break this up into users by timezone at some point
  const timer = l.startTimer()
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
  l.debug(`Looking for digest users for items after ${afterDateTime}`, {
    digestDateTime: afterDateTime,
  })
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
  const count = digestUsers.length || 0
  l.debug(`${count} digest users found for ${afterDateTime}`, {
    userActers: digestUsers.map(({ id }) => id),
    count,
  })

  await Promise.all(
    digestUsers.map(async (acter) => {
      await createDailyDigest({ acter, afterDateTime })
    })
  )
  timer.done({
    message: `Created digest notifications for ${count} users`,
    count,
  })
}
