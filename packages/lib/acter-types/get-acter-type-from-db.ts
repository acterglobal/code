import { ActerType } from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

export const getActerTypeFromDB = async (name: string): Promise<ActerType> => {
  // Create a User Acter
  const acterType = await prisma.acterType.findFirst({
    where: { name },
  })

  if (!acterType) {
    const err = 'Could not find user ActerType'
    console.error(err)
    throw err
  }

  return acterType
}
