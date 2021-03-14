import { Resolver, Query, Arg, Ctx } from 'type-graphql'
import { ActerGraphQLContext } from 'src/contexts/graphql-api'

import { User } from '@generated/type-graphql'
@Resolver(User)
export class UserResolver {
  @Query((returns) => User)
  async user(@Ctx() ctx: ActerGraphQLContext, @Arg('email') email: string) {
    return ctx.prisma.user.findUnique({
      where: { email },
    })
  }
}
