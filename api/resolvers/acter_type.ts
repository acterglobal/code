import { Resolver, Query, Ctx } from 'type-graphql'
import { ActerGraphQLContext } from 'src/contexts/graphql-api'

import { ActerType } from '@schema'

@Resolver(ActerType)
export class ActerTypeResolver {
  @Query(() => [ActerType])
  async acterTypes(@Ctx() ctx: ActerGraphQLContext) {
    return ctx.prisma.acterType.findMany()
  }
}
