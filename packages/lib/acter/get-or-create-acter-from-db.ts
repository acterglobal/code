import { getActerTypeFromDB } from '@acter/lib/acter-types/get-acter-type-from-db'
import { getUniqueActerSlugFromDB } from '@acter/lib/acter/get-unique-acter-slug-from-db'
import { ActerTypes } from '@acter/lib/constants'
import { Acter, User } from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

export const getOrCreateActerFromDB = async (user: User): Promise<Acter> => {
  if (user.Acter) return user.Acter

  const name = user.email.match(/^(.*)@/)[1]
  const slug = await getUniqueActerSlugFromDB(name)
  const userActerType = await getActerTypeFromDB(ActerTypes.USER)

  const userWithActer = await prisma.user.update({
    include: {
      Acter: true,
    },
    data: {
      Acter: {
        create: {
          name,
          slug,
          acterTypeId: userActerType.id,
          createdByUserId: user.id,
        },
      },
    },
    where: { id: user.id },
  })

  return userWithActer.Acter
}
