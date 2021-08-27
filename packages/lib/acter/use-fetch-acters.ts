import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery, ApolloError } from '@apollo/client'
import { Acter } from '@acter/schema/types'
import { SearchType } from '@acter/lib/constants'
import SEARCH_ACTERS from '@acter/schema/queries/acters-search.graphql'
import SEARCH_ACTIVITIES from '@acter/schema/queries/activities-search.graphql'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'

type QueryString = string | string[]

interface QueryVariables {
  search?: QueryString
  interests?: QueryString
  sort?: QueryString
  types?: QueryString
}

interface SearchVariables {
  searchText?: string
  interests?: string[]
  sortBy?: SearchActivitiesSortBy
  types?: string[]
}

interface PaginationVariables {
  cursor?: string
  skip: number
  take: number
}

interface UseFetchActersQueryResults {
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
export const useFetchActers = (
  searchType: SearchType
): UseFetchActersQueryResults => {
  const router = useRouter()

  const { search, interests, sort, types } = router.query

  const searchVariables = useMemo<SearchVariables>(
    () => getSearchVariablesFromQuery({ search, interests, sort, types }),
    [search, interests, sort, types]
  )

  const paginationDefaults: PaginationVariables = {
    skip: 0,
    take: 3,
    cursor: null,
  }
  const [
    paginationVariables,
    setPaginationVariables,
  ] = useState<PaginationVariables>(paginationDefaults)

  const [acters, setActers] = useState<Acter[]>([])
  const [hasMore, setHasMore] = useState(true)

  const query =
    searchType === SearchType.ACTIVITIES ? SEARCH_ACTIVITIES : SEARCH_ACTERS
  const { loading, error, fetchMore, refetch, ...restQueryResult } = useQuery(
    query,
    {
      variables: {
        ...searchVariables,
        ...paginationVariables,
      },
      onCompleted: (data) => {
        const resultKey = SearchType.ACTIVITIES ? 'searchActivities' : 'acters'
        if (!data || !data[resultKey]) return
        const results = data[resultKey]
        const cursorIndex = results.length - 1
        setPaginationVariables({
          ...paginationDefaults,
          cursor: results[cursorIndex]?.id || paginationVariables.cursor,
          skip: 1,
        })
        setHasMore(results.length >= acters.length + paginationVariables.take)

        setActers(results)
      },
    }
  )

  // Reset the search if one of our search facets have changed
  useEffect(() => {
    setPaginationVariables(paginationDefaults)
    setActers([])
    setHasMore(true)
    refetch({
      ...searchVariables,
      ...paginationDefaults,
    })
  }, [searchVariables])

  const loadMore = () => {
    fetchMore({
      variables: searchVariables,
    })
  }

  return { acters, loading, error, loadMore, hasMore, ...restQueryResult }
}

const getSearchVariablesFromQuery = ({
  search,
  interests,
  sort,
  types,
}: QueryVariables): SearchVariables => {
  const sortBy = Array.isArray(sort) ? sort.pop() : sort
  return {
    searchText: search
      ? Array.isArray(search)
        ? search.join('+')
        : search
      : undefined,
    interests: interests ? (<string>interests).split(',') : undefined,
    sortBy: SearchActivitiesSortBy[sortBy] || SearchActivitiesSortBy.DATE,
    types: types ? (types as string).split(',') : [],
  }
}
