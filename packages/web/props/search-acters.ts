import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { initializeApollo, addApolloState } from '@acter/lib/apollo'
import { Acter } from '@acter/schema/types'
import SEARCH_ACTERS from '@acter/schema/queries/acters-search.graphql'
import { SearchVariablesType } from './search-activities'

export const searchActers: ComposedGetServerSideProps = async ({ query }) => {
  const { search: searchText, interests, types } = query

  const searchVariables: SearchVariablesType = { searchText }

  if (interests) {
    searchVariables.interests = (<string>interests).split(',')
  }
  searchVariables.types = types ? (<string>types).split(',') : []

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
  const { acters }: { acters: Acter[] } = data
  return addApolloState(apollo, {
    props: {
      acters,
    },
  })
}