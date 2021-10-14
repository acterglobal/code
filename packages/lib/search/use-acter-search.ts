import { useReactiveVar } from '@apollo/client'

import { useSearchType } from './use-search-type'

import { usePaginatedQuery, UsePaginatedState } from '@acter/lib/apollo'
import { SearchType, ResultKey } from '@acter/lib/constants'
import { searchVar, SearchVariables } from '@acter/lib/search/search-var'
import { Acter } from '@acter/schema'
import SEARCH_ACTERS from '@acter/schema/queries/acters-search.graphql'
import SEARCH_ACTIVITIES from '@acter/schema/queries/activities-search.graphql'

type ActerSearchData = {
  acters: Acter[]
}

interface UseActerSearchQueryResults
  extends Omit<UsePaginatedState<Acter, ActerSearchData>, 'results'> {
  acters: Acter[]
}

/**
 * Gives acter/activities list for the search parameters
 * @param searchType to use the search query for acter or activities
 * @returns acter/activities list, fetchingstatus, error, rest of the query results
 */
export const useActerSearch = (): UseActerSearchQueryResults => {
  const searchType = useSearchType()
  const searchVariables = useReactiveVar(searchVar)

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
    query: queries[searchType],
    resultKey,
    variables: searchVariables,
  })

  return { acters: results, ...restQueryResult }
}
