import { logger } from '@acter/lib/logger'
import { ActerType } from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

const l = logger.child({ label: 'getActerTypeFromDB' })

export const getActerTypeFromDB = async (name: string): Promise<ActerType> => {
  // Create a User Acter
  const acterType = await prisma.acterType.findFirst({
    where: { name },
  })

  if (!acterType) {
    const err = 'Could not find user ActerType'
    l.error(err)
    throw err
  }

  return acterType
}
