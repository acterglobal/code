import { pipe } from 'fp-ts/function'
import { Resolver, Query, Arg, Ctx, registerEnumType } from 'type-graphql'
import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'
import { Acter } from '@acter/schema/types'
import {
  getOrderBy,
  SearchActivitiesSortBy,
} from '@acter/lib/api/resolvers/get-order-by'
import { ActerTypes, ActivityTypes } from '@acter/lib/constants'

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

type EqualsClause = {
  equals: string | null
}

type InterestNameInClause = {
  name: InClause
}

type ActerInterestsNameFilter = {
  Interest: InterestNameInClause
}

type EveryActerInterestClause = {
  some: ActerInterestsNameFilter
}

type ActivityTypeNameInClause = {
  name: InClause
}

type ActivityTypeNameFilterClause = {
  ActivityType: ActivityTypeNameInClause
}

type MeetingTypeNameClause = {
  name: ActivityTypes.MEETING
}

type ExcludeMeetingTypeClause = {
  isNot: MeetingTypeNameClause
}

type ActivityTypeClause = {
  Activity: { ActivityType: ExcludeMeetingTypeClause }
}

type ActerTypeNameClause = {
  name: ActerTypes.ACTIVITY
}

type ActerTypeClause = {
  ActerType: ActerTypeNameClause
}

type ANDClause = [ActerTypeClause, ActivityTypeClause]

type ActivitySearchWhereClause = {
  name?: ActivityNameWhereClause
  deletedAt?: EqualsClause
  Activity?: ActivityEndsBeforeClause | ActivityTypeNameFilterClause
  ActerInterests?: EveryActerInterestClause
  AND?: ANDClause
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
        some: {
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

const withActivityTypesFilter = (activityTypes: [string]) => (
  whereClause: ActivitySearchWhereClause
): ActivitySearchWhereClause => {
  return {
    ...whereClause,
    Activity: {
      ActivityType: {
        name: {
          in: activityTypes,
          mode: 'insensitive',
        },
      },
    },
  }
}

@Resolver(Acter)
export class SearchResolver {
  @Query(() => [Acter])
  async searchActivities(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('searchText', { nullable: true }) searchText: string,
    @Arg('endsBefore', { nullable: true }) endsBefore: Date,
    @Arg('interests', () => [String], { nullable: true }) interests: [string],
    @Arg('types', () => [String], { nullable: true }) types: [string],
    @Arg('sortBy', { nullable: true }) sortBy: SearchActivitiesSortBy
  ): Promise<Acter[]> {
    // Build up the where clause with only values that are set
    const activitySearch: ActivitySearchWhereClause = {
      deletedAt: { equals: null },
      AND: [
        {
          ActerType: {
            name: ActerTypes.ACTIVITY,
          },
        },
        {
          Activity: {
            ActivityType: {
              isNot: {
                name: ActivityTypes.MEETING,
              },
            },
          },
        },
      ],
    }

    const where = pipe(
      activitySearch,
      withNameSearch(searchText),
      withEndsBeforeSearch(endsBefore),
      withInterestsFilter(interests),
      withActivityTypesFilter(types)
    )

    return ctx.prisma.acter.findMany({
      where,
      orderBy: getOrderBy(sortBy),
    })
  }
}
