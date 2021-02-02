import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { seedActerTypes } from './seeds/acter-types'
import { seedInterests } from './seeds/interests'

const main = async () => {
  await seedActerTypes(prisma)
  await seedInterests(prisma)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
