/* eslint-disable no-console */
import 'reflect-metadata'

import { getDate, getMonth, getYear } from 'date-fns'

import { ActerTypes } from '@acter/lib/constants'
import {
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
} from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

import { createDailyDigest } from './create-daily-digest'

export const dailyDigestCronWorker = async (): Promise<void> => {
  // TODO: We should probably break this up into users by timezone at some point
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
  console.log(`Looking for digest users for items after ${afterDateTime}`)
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
  console.log(
    `${digestUsers.length || 0} digest users found for ${afterDateTime}`
  )

  digestUsers.forEach((acter) => {
    createDailyDigest({ acter, afterDateTime })
  })
}
