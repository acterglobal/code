import { ComposedGetServerSideProps } from 'lib/compose-props'
import { initializeApollo, addApolloState } from 'src/lib/apollo'
import { Acter } from '@schema'
import SEARCH_ACTERS from 'api/queries/acters-search.graphql'
import { SearchActivitiesSortBy } from 'src/lib/api/resolvers/get-order-by'

type VariablesType = {
  searchText: string | string[]
  interests?: string[]
  sortBy?: SearchActivitiesSortBy
}

export const searchActers: ComposedGetServerSideProps = async ({ query }) => {
  const { search: searchText, interests } = query

  const searchVariables: VariablesType = { searchText }

  if (interests) {
    searchVariables.interests = (<string>interests).split(',')
  }

  const apollo = initializeApollo()
  const { data, error } = await apollo.query({
    query: SEARCH_ACTERS,
    variables: searchVariables,
  })

  if (error) {
    return {
      props: {
        error,
      },
    }
  }
  console.log('DATA.....:', data)
  const { acters }: { acters: Acter[] } = data
  return addApolloState(apollo, {
    props: {
      acters,
    },
  })
}
