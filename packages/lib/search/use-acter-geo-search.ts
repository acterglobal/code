import { useQuery, UseQueryArgs, UseQueryState } from 'urql'

import {
  SearchVariables,
  useSearchVariables,
} from '@acter/components/contexts/search-variables'
import { Acter } from '@acter/schema'
import GEO_SEARCH_ACTERS from '@acter/schema/queries/acters-geo-search.graphql'

type ActerSearchData = {
  acters: Acter[]
}

export interface UseActerSearchQueryResults
  extends UseQueryState<ActerSearchData, SearchVariables> {
  acters: Acter[]
}

/**
 * Gives acter/activities list for the search parameters
 * @param searchType to use the search query for acter or activities
 * @returns acter/activities list, fetching status, error, rest of the query results
 */
export const useActerGeoSearch = (
  options?: UseQueryArgs<ActerSearchData, SearchVariables>
): UseActerSearchQueryResults => {
  const [searchVariables] = useSearchVariables()

  const { north, east, south, west } = searchVariables
  const pause = !north || !east || !south || !west

  const [{ data, ...restQueryResult }] = useQuery<
    ActerSearchData,
    SearchVariables
  >({
    ...options,
    query: GEO_SEARCH_ACTERS,
    variables: searchVariables,
    pause,
  })

  return { acters: data?.acters, ...restQueryResult }
}
