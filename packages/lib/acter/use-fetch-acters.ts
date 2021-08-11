import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLazyQuery, ApolloError, QueryResult } from '@apollo/client'
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
  data: { acters: Acter[] }
}

export const useFetchActers = () => {
  const router = useRouter()
  const { search, interests, types } = router.query

  const searchVariables: SearchVariablesType = { searchText: search }
  if (interests) {
    searchVariables.interests = (interests as string).split(',')
  }
  searchVariables.types = types ? (types as string).split(',') : []

  console.log('types :', searchVariables.types)
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
  }, [])

  //   useEffect(() => {
  //     getActers({
  //       variables: {
  //         ...searchVariables,
  //         skip: 0,
  //         take: 4,
  //       },
  //     })
  //   }, [searchVariables.types])

  const loadMore = () => {
    fetchMore({
      variables: {
        skip: data.acters.length,
        take: 4,
      },
    })
  }

  return [loading, data, loadMore]
}
