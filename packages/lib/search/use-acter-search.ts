import { useEffect, useState } from 'react'

import {
  SearchVariables,
  useSearchVariables,
} from '@acter/components/contexts/search-variables'
import {
  usePaginatedQuery,
  UsePaginatedState,
  UsePaginationQueryOptions,
} from '@acter/lib/urql/use-paginated-query'
import { Acter } from '@acter/schema'
import SEARCH_ACTERS from '@acter/schema/queries/acters-search.graphql'

type ActerSearchData = {
  acters: Acter[]
}

export interface UseActerSearchQueryResults
  extends Omit<UsePaginatedState<Acter, ActerSearchData>, 'results'> {
  acters: Acter[]
}

type UseActerSearchOptions = UsePaginationQueryOptions<
  Acter,
  ActerSearchData,
  SearchVariables
>

/**
 * Gives acter/activities list for the search parameters
 * @param searchType to use the search query for acter or activities
 * @returns acter/activities list, fetching status, error, rest of the query results
 */
export const useActerSearch = (
  options?: UseActerSearchOptions
): UseActerSearchQueryResults => {
  const [variables] = useSearchVariables()
  const [pause, setPause] = useState(true)
  const [acters, setActers] = useState<Acter[]>([])

  useEffect(() => {
    if (
      // If we don't have any types set, don't bother searching
      variables.types?.length < 1 ||
      // If we have bounding box variables but they're null, wait to search
      (variables.north === null &&
        variables.east === null &&
        variables.south === null &&
        variables.west === null)
    ) {
      setActers([])
      setPause(true)
      return
    }

    return setPause(false)
  }, [JSON.stringify(variables)])

  const [{ results, ...restQueryResult }] = usePaginatedQuery<
    Acter,
    ActerSearchData,
    SearchVariables
  >({
    ...options,
    query: SEARCH_ACTERS,
    dataKey: 'searchActers',
    variables,
    //@ts-ignore
    pause,
  })

  useEffect(() => setActers(results.toList().toArray()), [results])

  return { acters, ...restQueryResult }
}
