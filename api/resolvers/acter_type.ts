import { Resolver, Query, Ctx } from 'type-graphql'
import { ActerGraphQLContext } from 'src/contexts/graphql-api'

import { ActerType } from '@generated/type-graphql'

@Resolver(ActerType)
export class ActerTypeResolver {
  @Query((returns) => [ActerType])
  async acterTypes(@Ctx() ctx: ActerGraphQLContext) {
    return ctx.prisma.acterType.findMany()
  }
}
