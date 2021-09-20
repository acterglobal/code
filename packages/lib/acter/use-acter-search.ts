import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { ApolloError } from '@apollo/client'
import { Acter } from '@acter/schema/types'
import { SearchType, ResultKey } from '@acter/lib/constants'
import { usePaginatedQuery } from '@acter/lib/apollo'
import SEARCH_ACTERS from '@acter/schema/queries/acters-search.graphql'
import SEARCH_ACTIVITIES from '@acter/schema/queries/activities-search.graphql'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'
import { useQuerystringTypes } from '@acter/lib/search/use-querystring-types'

type QueryString = string | string[]

interface QueryVariables {
  search?: QueryString
  interests?: QueryString
  sort?: QueryString
  types?: string[]
}

interface SearchVariables {
  searchText?: string
  interests?: string[]
  orderBy?: SearchActivitiesSortBy
  types?: string[]
}

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
export const useActerSearch = (
  searchType: SearchType
): useActerSearchQueryResults => {
  const router = useRouter()
  const types = useQuerystringTypes()

  const { search, interests, sortBy: sort } = router.query

  const searchVariables = useMemo<SearchVariables>(
    () => getSearchVariablesFromQuery({ search, interests, sort, types }),
    [search, interests, sort, types]
  )

  const [acters, setActers] = useState<Acter[]>([])

  const queries = {
    [SearchType.ACTIVITIES]: SEARCH_ACTIVITIES,
    [SearchType.ACTERS]: SEARCH_ACTERS,
  }

  const resultKey = ResultKey[searchType.toUpperCase()]

  const {
    loading,
    error,
    hasMore,
    fetchMore,
    refetch,
    ...restQueryResult
  } = usePaginatedQuery(queries[searchType], resultKey, {
    variables: searchVariables,
    pageSize: 20,
    onCompleted: (data) => setActers(data[resultKey]),
  })

  // Reset the search if one of our search facets have changed
  useEffect(() => {
    refetch({
      variables: searchVariables,
      resetPagination: true,
    })
  }, [searchVariables])

  const loadMore = () => fetchMore({ variables: searchVariables })

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
    orderBy: SearchActivitiesSortBy[sortBy] || SearchActivitiesSortBy.DATE,
    types,
  }
}
