import { Resolver, Query, Arg, Ctx, registerEnumType } from 'type-graphql'

import {
  ActivitiesDateFilter,
  withDateFilter,
} from '@acter/lib/api/resolvers/date-filter'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'
import type { ActerGraphQLContext } from '@acter/lib/types/graphql-api'
import { Activity } from '@acter/schema'
import { Prisma } from '@acter/schema/prisma'

registerEnumType(SearchActivitiesSortBy, {
  name: 'SearchActivitiesSortBy',
})

registerEnumType(ActivitiesDateFilter, {
  name: 'ActivitiesDateFilter',
})

@Resolver(Activity)
export class ActivitiesResolver {
  @Query(() => [Activity])
  async activities(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('followerId') followerId: string,
    @Arg('dateFilter', { nullable: true })
    dateFilter: ActivitiesDateFilter
  ): Promise<Activity[]> {
    const where: Prisma.ActivityWhereInput = {
      AND: [
        {
          Acter: {
            is: {
              deletedAt: { equals: null },
              Followers: {
                some: { Follower: { is: { id: { equals: followerId } } } },
              },
            },
          },
        },
        withDateFilter(dateFilter),
      ].filter((clause) => !!clause),
    }

    const options = {
      where,
    }

    return await ctx.prisma.activity.findMany(options)
  }
}
