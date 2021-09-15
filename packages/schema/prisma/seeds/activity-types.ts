import { PrismaClient } from '@prisma/client'

import { ActivityTypes } from '@acter/lib/constants'

export const seedActivityTypes = async (
  prisma: PrismaClient
): Promise<void> => {
  const { EVENT, IDEA, MEETING, PROJECT } = ActivityTypes
  const types = [EVENT, IDEA, MEETING, PROJECT]
  await Promise.all(
    types.map(async (name) => {
      const res = prisma.activityType.upsert({
        where: { name },
        create: { name },
        update: {},
      })
      console.log('ActivityType created: ', name)
      return res
    })
  )

  const eventActivityType = await prisma.activityType.findFirst({
    where: {
      name: 'event',
    },
  })

  await prisma.activity.updateMany({
    data: {
      activityTypeId: eventActivityType.id,
    },
    where: {
      activityTypeId: 'dummy',
    },
  })

  await prisma.activityType.deleteMany({
    where: {
      id: 'dummy',
    },
  })
}
