import { useEffect, useState } from 'react'

import { UseQueryArgs } from 'urql'

import {
  SearchVariables,
  useSearchVariables,
} from '@acter/components/contexts/search-variables'
import { usePaginatedQuery, UsePaginatedState } from '@acter/lib/urql'
import { Acter } from '@acter/schema'
import SEARCH_ACTERS from '@acter/schema/queries/acters-search.graphql'

type ActerSearchData = {
  acters: Acter[]
}

export interface UseActerSearchQueryResults
  extends Omit<UsePaginatedState<Acter, ActerSearchData>, 'results'> {
  acters: Acter[]
}

interface UseActerSearchOptions
  extends UseQueryArgs<ActerSearchData, SearchVariables> {
  isMapSearch?: boolean
}

/**
 * Gives acter/activities list for the search parameters
 * @param searchType to use the search query for acter or activities
 * @returns acter/activities list, fetching status, error, rest of the query results
 */
export const useActerSearch = (
  options?: UseActerSearchOptions
): UseActerSearchQueryResults => {
  const [variables] = useSearchVariables()
  const [acters, setActers] = useState<Acter[]>([])
  const [pause, setPause] = useState(true)

  useEffect(() => {
    // If we don't have any types set, don't bother searching
    if (variables.types?.length < 1) {
      setActers([])
      setPause(true)
      return
    }

    // Otherwise, go ahead and search
    setPause(false)
  }, [JSON.stringify(variables)])

  const [{ results, ...restQueryResult }] = usePaginatedQuery<
    Acter,
    ActerSearchData,
    SearchVariables
  >({
    ...options,
    query: SEARCH_ACTERS,
    resultKey: 'searchActers',
    variables,
    pause,
  })

  useEffect(() => {
    if (results) {
      console.log('Got (more) results', { results, restQueryResult })
      setActers(results)
    }
  }, [results.reduce((key, r) => `${key},${r.id}`, '')])

  return { acters, ...restQueryResult }
}
