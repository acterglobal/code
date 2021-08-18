import prisma from '@acter/schema/prisma'
import { User } from '@acter/schema'

export const getOrCreateUserByEmailFromDB = async (
  email: string
): Promise<User> => {
  return prisma.user.upsert({
    include: {
      Acter: true,
    },
    create: { email },
    update: {},
    where: { email },
  })
}
