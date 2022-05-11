import { Resolver, Query, ObjectType, Field, Ctx } from 'type-graphql'

import { getLogger } from '@acter/lib/logger'
import { ActerGraphQLContext } from '@acter/lib/types/graphql-api'

@ObjectType()
export class Health {
  @Field()
  ok: boolean

  constructor(ruok: boolean) {
    this.ok = ruok
  }
}

const l = getLogger('HealthCheckResolver')
@Resolver(Health)
export class HealthCheckResolver {
  @Query(() => Health)
  async healthCheck(@Ctx() ctx: ActerGraphQLContext): Promise<Health> {
    try {
      await ctx.prisma.$queryRaw`SELECT 1`
      return new Health(true)
    } catch (e) {
      l.error(e)
      return new Health(false)
    }
  }
}
