// TODO: FIX types
/* eslint-disable */
import { Resolver, Query, Arg, Ctx } from 'type-graphql'
import { ActerGraphQLContext } from 'src/contexts/graphql-api'

import { User } from '@schema'
@Resolver(User)
export class UserResolver {
  @Query(() => User)
  async user(@Ctx() ctx: ActerGraphQLContext, @Arg('email') email: string) {
    return ctx.prisma.user.findUnique({
      where: { email },
    })
  }
}
