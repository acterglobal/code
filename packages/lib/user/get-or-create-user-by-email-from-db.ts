import prisma from '@acter/lib/prisma'
import { User } from '@schema'

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
