import prisma from '@acter/lib/prisma'

export const getUniqueActerSlugFromDB = async (
  name: string
): Promise<string> => {
  // TODO: test this well
  const matchingNames = await prisma.acter.findMany({
    where: { slug: { startsWith: name.toLocaleLowerCase() } },
  })
  return matchingNames ? `${name}_${matchingNames.length}` : name.toLowerCase()
}
