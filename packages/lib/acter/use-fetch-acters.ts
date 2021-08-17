import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery, ApolloError } from '@apollo/client'
import { Acter } from '@acter/schema/types'
import SEARCH_ACTERS from '@acter/schema/queries/acters-search.graphql'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'

export type SearchVariablesType = {
  searchText: string | string[]
  interests?: string[]
  sortBy?: SearchActivitiesSortBy
  types?: string[]
}

type UseFetchActersData = {
  acters: Acter[]
}
interface UseFetchActersQueryResults {
  loading: boolean
  error: ApolloError
  loadMore: () => void
}

export const useFetchActers = (): [
  UseFetchActersData,
  UseFetchActersQueryResults
] => {
  const router = useRouter()
  const { search: searchText, interests, types } = router.query
  const [searchVariables, setSearchVariables] = useState<SearchVariablesType>({
    searchText,
  })

  useEffect(() => {
    setSearchVariables({
      ...searchVariables,
      searchText,
      interests: interests ? (<string>interests).split(',') : undefined,
      types: types ? (types as string).split(',') : [],
    })
  }, [searchText, interests, types])

  const [
    getActers,
    { loading, data, fetchMore, error, ...restQueryResult },
  ] = useLazyQuery(SEARCH_ACTERS)

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
        skip: data.acters.length,
        take: 4,
      },
    })
  }

  return [data, { loading, error, loadMore, ...restQueryResult }]
}
