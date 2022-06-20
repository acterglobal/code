import { ActivitiesDateFilter } from './date-filter'

export enum SearchActivitiesSortBy {
  DATE = 'DATE',
  NAME = 'NAME',
}

type sort = Record<string, 'asc' | 'desc'>
type ActivityDateSort = { Activity: sort }
type ActerNameSort = sort
type SearchActivitiesOrderBy =
  | ActivityDateSort
  | ActerNameSort
  | Record<string, never>

/**
 * Gives the order by condition base on sort string
 * @param sortBy is a string (date | name)
 * @returns orderBy condition
 */
export const getOrderBy = (
  sortBy: SearchActivitiesSortBy,
  dateFilter?: ActivitiesDateFilter
): SearchActivitiesOrderBy => {
  const { ALL, PAST } = ActivitiesDateFilter

  switch (sortBy) {
    case SearchActivitiesSortBy.DATE:
      return {
        Activity: {
          startAt: dateFilter === PAST || ALL ? 'desc' : 'asc',
        },
      }
    case SearchActivitiesSortBy.NAME:
      return { name: 'asc' }
    default:
      return {}
  }
}
