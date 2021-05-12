import { ComposedGetServerSideProps } from 'lib/compose-props'
import { initializeApollo, addApolloState } from 'src/lib/apollo'
import { Acter } from '@schema'

import SEARCH_ACTERS from 'api/queries/acters-search.graphql'
import SEARCH_ACTIVITIES from 'api/queries/activities-search.graphql'

type VariablesType = {
  searchText: string | string[]
  interests?: string[]
}

export const searchActers: ComposedGetServerSideProps = async ({ query }) => {
  const { search: searchText, interests } = query

  const variables: VariablesType = { searchText }
  if (interests) {
    variables.interests = (<string>interests).split(',')
  }

  const apollo = initializeApollo()
  const { data, error } = await apollo.query({
    query: SEARCH_ACTIVITIES,
    variables: variables,
  })

  if (error) {
    return {
      props: {
        error,
      },
    }
  }

  const { acters }: { acters: Acter[] } = data
  return addApolloState(apollo, {
    props: {
      acters,
    },
  })
}
