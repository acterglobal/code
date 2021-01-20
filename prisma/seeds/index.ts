import { PrismaClient } from '@prisma/client'

const seedDb = async () => {
  console.time()
  const prisma = new PrismaClient()

  try {
    await prisma.$connect()
  } catch (error) {
    throw error
  }

  console.log('Creating ActerType seeds')
  await Promise.all(
    ['User', 'Group', 'Organization', 'Network'].map(async (name) => {
      console.log(`Trying to create ${name}`)

      const typeCreate = { name }

      const type = await prisma.acterType.upsert({
        create: typeCreate,
        update: typeCreate,
        where: { name },
      })
      console.log(`Created: ${JSON.stringify(type)}`)
      return type
    })
  )

  await prisma.$disconnect()
  console.log('Finished creating seeds')
  console.timeEnd()
}

seedDb()
  .catch((e) => console.error(e))
  .finally(() => process.exit(0))
