export enum SearchActivitiesSortBy {
  DATE,
  NAME,
}

type sort = Record<string, 'asc' | 'desc'>
type ActivityDateSort = { activities: sort }
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
  sortBy: SearchActivitiesSortBy
): SearchActivitiesOrderBy => {
  switch (sortBy) {
    case SearchActivitiesSortBy.DATE:
      return {
        activities: {
          endDate: 'asc',
        },
      }
    case SearchActivitiesSortBy.NAME:
      return { name: 'asc' }
    default:
      return {}
  }
}
