import { Resolver, Query, Arg, Ctx, registerEnumType, Int } from 'type-graphql'

import {
  getOrderBy,
  SearchActivitiesSortBy,
} from '@acter/lib/api/resolvers/get-order-by'
import type { ActerGraphQLContext } from '@acter/lib/types/graphql-api'
import { Acter } from '@acter/schema'
import { ActerPrivacySettings } from '@acter/schema'
import { ActerWhereUniqueInput } from '@acter/schema/generated'
import { Prisma } from '@acter/schema/prisma'

import { withActerTypesSearch } from './acter-types'
import { withActivityTypesFilter } from './activity-types'
import { withEndsBeforeSearch } from './ends-before'
import { withInterestsFilter } from './interests'
import { withLocation } from './location'
import { withNameSearch } from './name'

registerEnumType(SearchActivitiesSortBy, {
  name: 'SearchActivitiesSortBy',
})

@Resolver(Acter)
export class SearchResolver {
  @Query(() => [Acter])
  async searchActers(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('searchText', { nullable: true }) searchText: string,
    @Arg('endsBefore', { nullable: true }) endsBefore: Date,
    @Arg('interests', () => [String], { nullable: true }) interests: [string],
    @Arg('types', () => [String], { nullable: true }) types: [string],
    @Arg('activityTypes', () => [String], { nullable: true })
    activityTypes: [string],
    @Arg('north', { nullable: true }) north: number,
    @Arg('east', { nullable: true }) east: number,
    @Arg('south', { nullable: true }) south: number,
    @Arg('west', { nullable: true }) west: number,
    @Arg('orderBy', { nullable: true }) orderBy: SearchActivitiesSortBy,
    @Arg('take', () => Int, { nullable: true }) take: number,
    @Arg('skip', () => Int, { nullable: true }) skip: number,
    @Arg('cursor', { nullable: true }) cursor: ActerWhereUniqueInput
  ): Promise<Acter[]> {
    const where: Prisma.ActerWhereInput = {
      AND: [
        {
          deletedAt: { equals: null },
          acterPrivacySetting: { not: ActerPrivacySettings.PRIVATE },
        },
        withActerTypesSearch(types),
        withNameSearch(searchText),
        withEndsBeforeSearch(endsBefore),
        withInterestsFilter(interests),
        withLocation({ north, east, south, west }),
        withActivityTypesFilter(activityTypes),
      ].filter((clause) => !!clause),
    }

    const options = {
      where,
      orderBy: getOrderBy(orderBy),
      take,
      skip,
      ...(cursor ? { cursor } : {}),
    }

    return await ctx.prisma.acter.findMany(options)
  }
}
