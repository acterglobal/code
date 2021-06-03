import prisma from 'src/lib/prisma'
import { getActerTypeFromDB } from 'src/lib/acter-types/get-acter-type-from-db'
import { getUniqueActerSlugFromDB } from 'src/lib/acter/get-unique-acter-slug-from-db'
import { USER } from 'src/constants/acter-types'
import { Acter, User } from '@schema'

export const getOrCreateActerFromDB = async (user: User): Promise<Acter> => {
  if (user.Acter) return user.Acter

  const name = user.email.match(/^(.*)@/)[1]
  const slug = await getUniqueActerSlugFromDB(name)
  const userActerType = await getActerTypeFromDB(USER)

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
