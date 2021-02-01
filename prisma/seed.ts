import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { seedInterests } from './seeds/interests'

const main = async () => {
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
