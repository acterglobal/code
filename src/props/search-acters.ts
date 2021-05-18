import { ComposedGetServerSideProps } from 'lib/compose-props'
import { initializeApollo, addApolloState } from 'src/lib/apollo'
import { Acter } from '@schema'
import SEARCH_ACTERS from 'api/queries/acters-search.graphql'
import { SearchVariablesType } from 'src/props/search-activities'

export const searchActers: ComposedGetServerSideProps = async ({ query }) => {
  const { search: searchText, interests } = query

  const searchVariables: SearchVariablesType = { searchText }

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
  const { acters }: { acters: Acter[] } = data
  return addApolloState(apollo, {
    props: {
      acters,
    },
  })
}
