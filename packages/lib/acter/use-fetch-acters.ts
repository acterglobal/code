import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery, ApolloError } from '@apollo/client'
import { Acter } from '@acter/schema/types'
import { SearchType } from '@acter/lib/constants'
import SEARCH_ACTERS from '@acter/schema/queries/acters-search.graphql'
import SEARCH_ACTIVITIES from '@acter/schema/queries/activities-search.graphql'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'

type SearchVariablesType = {
  searchText: string | string[]
  interests?: string[]
  sortBy?: SearchActivitiesSortBy
  types?: string[]
}

type UseFetchActersData = {
  acters: Acter[]
}

type UseFetchActersQueryResults = {
  loading: boolean
  error: ApolloError
  loadMore: () => void
}

/**
 * Gives acter/activities list for the search parameters
 * @param searchType to use the search query for acter or activities
 * @returns acter/activities list, loading status, error, rest of the query results
 */
export const useFetchActers = (
  searchType: SearchType
): [UseFetchActersData, UseFetchActersQueryResults] => {
  const router = useRouter()
  const { search: searchText, interests, sortBy: sort, types } = router.query
  const [searchVariables, setSearchVariables] = useState<SearchVariablesType>({
    searchText,
  })
  const sortBy = Array.isArray(sort) ? sort.pop() : sort

  const [acters, setActers] = useState([])

  useEffect(() => {
    setSearchVariables({
      ...searchVariables,
      searchText,
      interests: interests ? (<string>interests).split(',') : undefined,
      sortBy: SearchActivitiesSortBy[sortBy] || SearchActivitiesSortBy.DATE,
      types: types ? (types as string).split(',') : [],
    })
  }, [searchText, interests, types, sortBy])

  const query =
    searchType === SearchType.ACTIVITIES ? SEARCH_ACTIVITIES : SEARCH_ACTERS
  const [
    getActers,
    { loading, data, fetchMore, error, ...restQueryResult },
  ] = useLazyQuery(query)

  useEffect(() => {
    if (data) {
      setActers(
        searchType === SearchType.ACTIVITIES
          ? data.searchActivities
          : data.acters
      )
    }
  }, [data])

  useEffect(() => {
    getActers({
      variables: {
        ...searchVariables,
        skip: 0,
        take: 4,
      },
    })
  }, [searchVariables])

  const loadMore = () => {
    fetchMore({
      variables: {
        skip: acters.length,
        take: 4,
      },
    })
  }

  return [{ acters }, { loading, error, loadMore, ...restQueryResult }]
}
