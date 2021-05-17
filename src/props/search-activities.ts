import { ComposedGetServerSideProps } from 'lib/compose-props'
import { SearchActivitiesSortBy } from 'src/lib/api/resolvers/get-order-by'
import { initializeApollo, addApolloState } from 'src/lib/apollo'
import { Acter } from '@schema'
import SEARCH_ACTIVITIES from 'api/queries/activities-search.graphql'

type VariablesType = {
  searchText: string | string[]
  interests?: string[]
  sortBy?: SearchActivitiesSortBy
}

export const searchActivities: ComposedGetServerSideProps = async ({
  query,
}) => {
  const { search: searchText, interests } = query

  const searchVariables: VariablesType = { searchText }

  if (interests) {
    searchVariables.interests = (<string>interests).split(',')
  }

  const sortBy = Array.isArray(query.sortBy) ? query.sortBy.pop() : query.sortBy
  searchVariables.sortBy =
    SearchActivitiesSortBy[sortBy] || SearchActivitiesSortBy.DATE

  const apollo = initializeApollo()
  const { data, error } = await apollo.query({
    query: SEARCH_ACTIVITIES,
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
  const { searchActivities }: { searchActivities: Acter[] } = data
  return addApolloState(apollo, {
    props: {
      acters: searchActivities,
    },
  })
}
