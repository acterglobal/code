import { ComposedGetServerSideProps } from 'lib/compose-props'
import { initializeApollo, addApolloState } from 'src/lib/apollo'
import { Acter } from '@schema'

import SEARCH_ACTERS from 'api/queries/acters-search.graphql'

export const searchActers: ComposedGetServerSideProps = async () => {
  const apollo = initializeApollo()
  const { data, error } = await apollo.query({
    query: SEARCH_ACTERS,
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
