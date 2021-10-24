import { useEffect, useRef, useState } from 'react'

import { ApolloError, useReactiveVar } from '@apollo/client'

import { useSearchType } from './use-search-type'

import { usePaginatedQuery } from '@acter/lib/apollo'
import { SearchType, ResultKey } from '@acter/lib/constants'
import { searchVar } from '@acter/lib/search/search-var'
import { Acter } from '@acter/schema'
import SEARCH_ACTERS from '@acter/schema/queries/acters-search.graphql'
import SEARCH_ACTIVITIES from '@acter/schema/queries/activities-search.graphql'

interface useActerSearchQueryResults {
  acters: Acter[]
  loading: boolean
  error: ApolloError
  loadMore: () => void
  hasMore: boolean
}

/**
 * Gives acter/activities list for the search parameters
 * @param searchType to use the search query for acter or activities
 * @returns acter/activities list, loading status, error, rest of the query results
 */
export const useActerSearch = (): useActerSearchQueryResults => {
  const searchType = useSearchType()
  const searchVariables = useReactiveVar(searchVar)
  const initialSearch = useRef(true)
  const [loading, setLoading] = useState(false)

  const [acters, setActers] = useState<Acter[]>([])

  const queries = {
    [SearchType.ACTIVITIES]: SEARCH_ACTIVITIES,
    [SearchType.ACTERS]: SEARCH_ACTERS,
  }

  const resultKey = ResultKey[searchType.toUpperCase()]

  const {
    loading: searchLoading,
    error,
    hasMore,
    fetchMore,
    refetch,
    ...restQueryResult
  } = usePaginatedQuery(queries[searchType], resultKey, {
    variables: searchVariables,
    pageSize: parseInt(process.env.NEXT_PUBLIC_SEARCH_PAGE_SIZE) || 20,
    onCompleted: (data) => {
      setLoading(false)
      if (data && data[resultKey]) setActers(data[resultKey])
    },
  })

  useEffect(() => {
    setLoading(searchLoading)
  }, [searchLoading])

  // Reset the search if one of our search facets have changed
  useEffect(() => {
    if (!initialSearch.current) {
      setLoading(true)
      refetch({
        variables: searchVariables,
        resetPagination: true,
      })
    }
  }, [JSON.stringify(searchVariables)])

  useEffect(() => {
    initialSearch.current = false
  }, [])

  const loadMore = () => fetchMore({ variables: searchVariables })

  return { acters, loading, error, loadMore, hasMore, ...restQueryResult }
}
