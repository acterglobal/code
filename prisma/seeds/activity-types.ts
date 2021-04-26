import { PrismaClient } from '@prisma/client'

export const seedActivityTypes = async (
  prisma: PrismaClient
): Promise<void> => {
  const types = ['event', 'idea', 'project']
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
}
