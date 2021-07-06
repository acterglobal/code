// TODO: FIX types
/* eslint-disable */
import { Resolver, Query, Ctx } from 'type-graphql'
import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'

import { ActerType } from '@acter/schema/types'

@Resolver(ActerType)
export class ActerTypeResolver {
  @Query(() => [ActerType])
  async acterTypes(@Ctx() ctx: ActerGraphQLContext) {
    return ctx.prisma.acterType.findMany()
  }
}