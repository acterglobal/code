import { ComposedGetServerSideProps } from 'lib/compose-props'
import { initializeApollo } from 'src/lib/apollo'

import QUERY_FOLLOWED_ACTERS from 'api/queries/query-followed-acters.graphql'

import { Acter } from '@schema'

/**
 *
 * @param ctx.props including the current User & User ActerType
 * @returns a list of Acters the current user is following
 */
export const getFollowedActers: ComposedGetServerSideProps = async ({
  props,
}) => {
  //TODO this needs to be refactored and tested
  const apollo = initializeApollo()

  if (!props?.user?.acterId) {
    console.log('Could not find acter id ', props)
    return {
      props: {},
      notFound: true,
    }
  }

  const { loading, error, data } = await apollo.query({
    query: QUERY_FOLLOWED_ACTERS,
    variables: { acterId: props?.user?.acterId },
  })

  if (loading) {
    return {
      props: {
        loading: true,
      },
    }
  }

  if (error) {
    return {
      props: {
        error,
      },
    }
  }

  const followingActers = data.acterConnections.map(
    (row) => row.Following as Acter
  )
  return {
    props: {
      followingActers,
    },
  }
}
