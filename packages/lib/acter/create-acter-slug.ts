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
  const { slug: parentSlug } = await ctx.prisma.acter.findFirst({
    select: { slug: true },
    where: {
      id: parentActerId,
      ActerType: { name: { notIn: [ActerTypes.USER] } },
    },
  })

  const slugifyString =
    parentActerId !== null
      ? `${parentSlug} ${acterName.toLocaleLowerCase()}`
      : acterName.toLocaleLowerCase()

  return slugify(slugifyString)
}
