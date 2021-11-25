import { PrismaClient } from '@prisma/client'

import { ActerTypes } from '@acter/lib/constants'

export const seedActerTypes = async (prisma: PrismaClient): Promise<void> => {
  // First loop is to create the ActerTypes
  await Promise.all(
    Object.values(ActerTypes).map(async (name) => {
      const res = prisma.acterType.upsert({
        where: { name },
        create: { name },
        update: {},
      })
      console.log('ActerType created: ', name)
      return res
    })
  )
}
