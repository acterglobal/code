import { ActerTypes } from '@acter/lib/constants'
import { ActivitiesDateFilter } from '@acter/lib/constants'
import { Prisma } from '@acter/schema/prisma'

export const withDateFilterSearch = (
  types: [string],
  dateFilter: ActivitiesDateFilter
): Prisma.ActerWhereInput => {
  const now = new Date()
  const nowDate = new Date(now)
  const nowOffsetDate = new Date(nowDate.setDate(nowDate.getDate() + 2))

  if (types.includes(ActerTypes.ACTIVITY)) {
    switch (dateFilter) {
      case ActivitiesDateFilter.UPCOMING:
        return {
          Activity: {
            endAt: {
              gte: nowOffsetDate,
            },
          },
        }
      case ActivitiesDateFilter.PAST:
        return {
          Activity: {
            endAt: {
              lte: now,
            },
          },
        }
      case ActivitiesDateFilter.ALL:
        return {
          Activity: {},
        }
    }
  }
}

export const withDateFilter = (
  dateFilter: ActivitiesDateFilter
): Prisma.ActivityWhereInput => {
  const now = new Date()
  switch (dateFilter) {
    case ActivitiesDateFilter.UPCOMING:
      return {
        endAt: {
          gte: now,
        },
      }
    case ActivitiesDateFilter.PAST:
      return {
        endAt: {
          lte: now,
        },
      }
    case ActivitiesDateFilter.ALL:
      return {}
  }
}
