import 'reflect-metadata'
import prisma from '@acter/lib/prisma'
import slugify from 'slugify'
import {
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
} from '@acter/schema/types'
import { digestCreateQueue } from '../workers/digest-create-worker'

export const digestCreateWorker = async (): Promise<void> => {
  const digestUsers = await prisma.user.findMany({
    include: {
      Acter: true,
    },
    where: {
      Acter: {
        acterNotifyEmailFrequency: ActerNotificationEmailFrequency.DAILY,
        acterNotifySetting: ActerNotificationSettings.ALL_ACTIVITY,
      },
    },
  })

  console.log(
    `[digestCreateWorker] found ${digestUsers.length} users for whom we will create digest emails`
  )

  await Promise.all(
    digestUsers.map(async (user) => {
      const slug = slugify(
        ['create_digest', user.id, new Date().toISOString()].join('_')
      )
      return await digestCreateQueue.add(slug, { user })
    })
  )

  process.exit(0)
}

digestCreateWorker()
