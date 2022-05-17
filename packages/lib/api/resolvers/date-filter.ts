import { ActerTypes } from '@acter/lib/constants'
import { Prisma } from '@acter/schema/prisma'

export enum SearchActivitiesDateFilter {
  ALL = 'ALL',
  UPCOMING = 'UPCOMING',
  PAST = 'PAST',
}

export const withDateFilterSearch = (
  types: [string],
  dateFilter: SearchActivitiesDateFilter
): Prisma.ActerWhereInput => {
  const now = new Date()
  if (types.includes(ActerTypes.ACTIVITY)) {
    switch (dateFilter) {
      case SearchActivitiesDateFilter.UPCOMING:
        return {
          Activity: {
            endAt: {
              gte: now,
            },
          },
        }
      case SearchActivitiesDateFilter.PAST:
        return {
          Activity: {
            endAt: {
              lte: now,
            },
          },
        }
      case SearchActivitiesDateFilter.ALL:
        return {
          Activity: {},
        }
    }
  }
}
