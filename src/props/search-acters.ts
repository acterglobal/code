import { ComposedGetServerSideProps } from 'lib/compose-props'
import { initializeApollo, addApolloState } from 'src/lib/apollo'
import { Acter } from '@schema'

import SEARCH_ACTERS from 'api/queries/acters-search.graphql'

export const searchActers: ComposedGetServerSideProps = async ({ query }) => {
  const searchText = query.search
  const interests = query.interests

  // console.log('query: ', (<string>interests).split(','))

  const apollo = initializeApollo()
  const { data, error } = await apollo.query({
    query: SEARCH_ACTERS,
    variables: { searchText },
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
