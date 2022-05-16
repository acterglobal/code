import { Prisma } from '@acter/schema/prisma'

export enum SearchActivitiesDateFilter {
  ALL = 'ALL',
  UPCOMING = 'UPCOMING',
  PAST = 'PAST',
}

export const withDateFilterSearch = (
  dateFilter: SearchActivitiesDateFilter
): Prisma.ActerWhereInput => {
  const now = new Date()
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
