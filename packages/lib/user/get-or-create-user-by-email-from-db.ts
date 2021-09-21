import { User } from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

type GetOrCreateActerFromDBParams = {
  email: string
  auth0ProviderId: string
}

export const getOrCreateUserByEmailFromDB = async ({
  email,
  auth0ProviderId,
}: GetOrCreateActerFromDBParams): Promise<User> => {
  return prisma.user.upsert({
    include: {
      Acter: true,
    },
    create: { email, auth0ProviderId },
    update: { auth0ProviderId },
    where: { email },
  })
}
