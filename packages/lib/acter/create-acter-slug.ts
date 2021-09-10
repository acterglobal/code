import slugify from 'slugify'
import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'
import { ActerTypes } from '@acter/lib/constants'

/**
 * creates the slug with acter name and its parent slug(if exist)
 * @param acterName acter name
 * @param parentActerId parent acter id (we need this for sub groups & activities)
 * @returns string (slug)
 */
export const createSlug = async (
  ctx: ActerGraphQLContext,
  acterName: string,
  parentActerId: string | null = null
): Promise<string> => {
  const getParentSlug = async () => {
    const { slug } = await ctx.prisma.acter.findFirst({
      select: { slug: true },
      where: {
        id: parentActerId,
        ActerType: { name: { notIn: [ActerTypes.USER] } },
      },
    })
    return slug
  }

  const parentActerSlug = parentActerId ? await getParentSlug() : null

  const slugifyString =
    parentActerId !== null
      ? `${parentActerSlug} ${acterName.toLocaleLowerCase()}`
      : acterName.toLocaleLowerCase()

  return slugify(slugifyString)
}
