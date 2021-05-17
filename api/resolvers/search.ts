import { pipe } from 'fp-ts/function'
import { Resolver, Query, Arg, Ctx, registerEnumType } from 'type-graphql'
import { ActerGraphQLContext } from 'src/contexts/graphql-api'
import { Acter } from '@schema'
import {
  getOrderBy,
  SearchActivitiesSortBy,
} from 'src/lib/api/resolvers/get-order-by'
import { ACTIVITY } from 'src/constants'

registerEnumType(SearchActivitiesSortBy, {
  name: 'SearchActivitiesSortBy',
})

type InsensitiveMode = {
  mode: 'insensitive'
}

type ActivityNameWhereClause = InsensitiveMode & {
  startsWith: string
}

type LessThanDate = {
  lte: Date
}

type ActivityEndsBeforeClause = {
  endAt: LessThanDate
}

type InClause = InsensitiveMode & {
  in: [string]
}

type InterestNameInClause = {
  name: InClause
}

type ActerInterestsNameFilter = {
  Interest: InterestNameInClause
}

type EveryActerInterestClause = {
  every: ActerInterestsNameFilter
}

type ActivitySearchWhereClause = {
  name?: ActivityNameWhereClause
  Activity?: ActivityEndsBeforeClause
  ActerInterests?: EveryActerInterestClause
  ActerType: Record<'name', 'activity'>
}

const withNameSearch = (name: string) => (
  whereClause: ActivitySearchWhereClause
): ActivitySearchWhereClause => {
  if (name) {
    return {
      ...whereClause,
      name: {
        startsWith: name,
        mode: 'insensitive',
      },
    }
  }
  return whereClause
}

const withEndsBeforeSearch = (beforeDateTime: Date) => (
  whereClause: ActivitySearchWhereClause
): ActivitySearchWhereClause => {
  if (beforeDateTime) {
    return {
      ...whereClause,
      Activity: {
        endAt: {
          lte: beforeDateTime,
        },
      },
    }
  }

  return whereClause
}

const withInterestsFilter = (interestNames: [string]) => (
  whereClause: ActivitySearchWhereClause
): ActivitySearchWhereClause => {
  if (interestNames && interestNames.length > 0) {
    return {
      ...whereClause,
      ActerInterests: {
        every: {
          Interest: {
            name: {
              in: interestNames,
              mode: 'insensitive',
            },
          },
        },
      },
    }
  }
  return whereClause
}

@Resolver(Acter)
export class SearchResolver {
  @Query(() => [Acter])
  async searchActivities(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('searchText', { nullable: true }) searchText: string,
    @Arg('endsBefore', { nullable: true }) endsBefore: Date,
    @Arg('interests', () => [String], { nullable: true }) interests: [string],
    @Arg('sortBy', { nullable: true }) sortBy: SearchActivitiesSortBy
  ): Promise<Acter[]> {
    // Build up the where clause with only values that are set
    const whereIsActivity: ActivitySearchWhereClause = {
      ActerType: {
        name: ACTIVITY,
      },
    }
    const where = pipe(
      whereIsActivity,
      withNameSearch(searchText),
      withEndsBeforeSearch(endsBefore),
      withInterestsFilter(interests)
    )

    return ctx.prisma.acter.findMany({
      where,
      orderBy: getOrderBy(sortBy),
    })
  }
}
