import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { initializeApollo, addApolloState } from '@acter/lib/apollo'
import { Acter } from '@schema'
import SEARCH_ACTIVITIES from 'api/queries/activities-search.graphql'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'

export type SearchVariablesType = {
  searchText: string | string[]
  interests?: string[]
  sortBy?: SearchActivitiesSortBy
  types?: string[]
}

export const searchActivities: ComposedGetServerSideProps = async ({
  query,
}) => {
  const { search: searchText, interests, types } = query

  const searchVariables: SearchVariablesType = { searchText }

  if (interests) {
    searchVariables.interests = (<string>interests).split(',')
  }
  searchVariables.types = types ? (<string>types).split(',') : []

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
  const { searchActivities }: { searchActivities: Acter[] } = data
  return addApolloState(apollo, {
    props: {
      acters: searchActivities,
    },
  })
}
