import { PrismaClient } from '@prisma/client'

import { seedActerTypes } from './seeds/acter-types'
import { seedActivityTypes } from './seeds/activity-types'
import { seedInterests } from './seeds/interests'

const prisma = new PrismaClient()

const main = async () => {
  await seedActerTypes(prisma)
  await seedInterests(prisma)
  await seedActivityTypes(prisma)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
