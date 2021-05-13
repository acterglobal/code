import { ComposedGetServerSideProps } from 'lib/compose-props'
import { initializeApollo, addApolloState } from 'src/lib/apollo'
import { Acter } from '@schema'
import { ACTERS, ACTIVITIES } from 'src/constants'
import SEARCH_ACTERS from 'api/queries/acters-search.graphql'
import SEARCH_ACTIVITIES from 'api/queries/activities-search.graphql'

type VariablesType = {
  searchText: string | string[]
  interests?: string[]
  sortBy?: string | string[]
}

export const searchActers: ComposedGetServerSideProps = async ({ query }) => {
  const { search: searchText, interests, sortBy, searchType } = query

  if (searchType !== ACTERS && searchType !== ACTIVITIES) {
    return {
      redirect: {
        destination: '/404',
      },
    }
  }

  const searchVariables: VariablesType = { searchText }

  if (interests) {
    searchVariables.interests = (<string>interests).split(',')
  }

  if (searchType === ACTIVITIES) {
    searchVariables.sortBy = sortBy
  }

  const apollo = initializeApollo()
  const { data, error } = await apollo.query({
    query: searchType === ACTERS ? SEARCH_ACTERS : SEARCH_ACTIVITIES,
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
