import { useEffect, useRef, useState } from 'react'

import { ApolloError, useReactiveVar } from '@apollo/client'
import { CombinedError } from '@urql/core'

import { useSearchType } from './use-search-type'
import { useQuery } from 'urql'

import { usePaginatedQuery } from '@acter/lib/apollo'
import { SearchType, ResultKey } from '@acter/lib/constants'
import { searchVar } from '@acter/lib/search/search-var'
import { Acter } from '@acter/schema'
import SEARCH_ACTERS from '@acter/schema/queries/acters-search.graphql'
import SEARCH_ACTIVITIES from '@acter/schema/queries/activities-search.graphql'

export interface UseActerSearchQueryResults {
  acters: Acter[]
  loading: boolean
  error: CombinedError
  loadMore: () => void
  hasMore: boolean
}

type Cursor = Record<'id', 'string'>

type Pagination = {
  take: number
  skip: number
  cursor?: Cursor
}

const paginationDefaults: Pagination = {
  take: 10,
  skip: 0,
}

/**
 * Gives acter/activities list for the search parameters
 * @param searchType to use the search query for acter or activities
 * @returns acter/activities list, loading status, error, rest of the query results
 */
export const useActerSearch = (): UseActerSearchQueryResults => {
  const searchType = useSearchType()
  const searchVariables = useReactiveVar(searchVar)
  const initialSearch = useRef(true)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [pagination, setPagination] = useState(paginationDefaults)

  const [acters, setActers] = useState<Acter[]>([])

  const queries = {
    [SearchType.ACTIVITIES]: SEARCH_ACTIVITIES,
    [SearchType.ACTERS]: SEARCH_ACTERS,
  }

  const resultKey = ResultKey[searchType.toUpperCase()]

  const [
    { data, fetching: searchLoading, error, ...restQueryResult },
  ] = useQuery({
    query: queries[searchType],
    variables: {
      ...searchVariables,
      ...{ ...pagination, take: pagination.take + 1 },
    },
  })

  useEffect(() => {
    if (data && data[resultKey]) {
      const resultSet = data[resultKey]
      const nextHasMore = resultSet.length > acters.length + pagination.take
      setHasMore(nextHasMore)
      const sliceEnd = nextHasMore ? -1 : undefined
      setActers([...resultSet.slice(0, sliceEnd)])
    }
  }, [data])

  useEffect(() => {
    setLoading(searchLoading)
  }, [searchLoading])

  // Reset the search if one of our search facets have changed
  useEffect(() => {
    if (!initialSearch.current) {
      setPagination(paginationDefaults)
    }
    initialSearch.current = false
  }, [JSON.stringify(searchVariables)])

  const loadMore = () => {
    hasMore &&
      setPagination({
        ...pagination,
        cursor: { id: data[resultKey][data[resultKey].length - 1].id },
      })
  }

  return { acters, loading, error, loadMore, hasMore, ...restQueryResult }
}
