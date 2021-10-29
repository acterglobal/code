import { useSearchType } from './use-search-type'
import { UseQueryArgs } from 'urql'

import {
  SearchVariables,
  useSearchVariables,
} from '@acter/components/contexts/search-variables'
import { SearchType, ResultKey } from '@acter/lib/constants'
import { usePaginatedQuery, UsePaginatedState } from '@acter/lib/urql'
import { Acter } from '@acter/schema'
import SEARCH_ACTERS from '@acter/schema/queries/acters-search.graphql'
import SEARCH_ACTIVITIES from '@acter/schema/queries/activities-search.graphql'

type ActerSearchData = {
  acters: Acter[]
}

export interface UseActerSearchQueryResults
  extends Omit<UsePaginatedState<Acter, ActerSearchData>, 'results'> {
  acters: Acter[]
}

/**
 * Gives acter/activities list for the search parameters
 * @param searchType to use the search query for acter or activities
 * @returns acter/activities list, fetching status, error, rest of the query results
 */
export const useActerSearch = (
  options?: UseQueryArgs<ActerSearchData, SearchVariables>
): UseActerSearchQueryResults => {
  const searchType = useSearchType()
  const [searchVariables] = useSearchVariables()

  const queries = {
    [SearchType.ACTIVITIES]: SEARCH_ACTIVITIES,
    [SearchType.ACTERS]: SEARCH_ACTERS,
  }

  const resultKey = ResultKey[searchType.toUpperCase()]

  const [{ results, ...restQueryResult }] = usePaginatedQuery<
    Acter,
    ActerSearchData,
    SearchVariables
  >({
    ...options,
    query: queries[searchType],
    resultKey,
    variables: searchVariables,
  })

  return { acters: results, ...restQueryResult }
}
