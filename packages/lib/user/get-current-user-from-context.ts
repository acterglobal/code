import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'
import { User } from '@schema'

export const getCurrentUserFromContext = async (
  ctx: ActerGraphQLContext
): Promise<Partial<User>> => {
  return ctx.prisma.user.findFirst({
    select: {
      id: true,
      Acter: true,
    },
    where: { id: ctx.session?.user?.id },
  })
}
