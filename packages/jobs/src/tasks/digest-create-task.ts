import 'reflect-metadata'
import prisma from '@acter/lib/prisma'
import {
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
} from '@acter/schema/types'
import { digestCreateQueue } from '../workers/digest-create-worker'

export const digestCreateWorker = async () => {
  console.log('Started looking for users:')
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

  console.log('Found the following users:')
  console.log(digestUsers)

  digestUsers.forEach((user) => {
    digestCreateQueue.add(`create_digest_${user.id}`, { user })
  })

  process.exit(0)
}

digestCreateWorker()
