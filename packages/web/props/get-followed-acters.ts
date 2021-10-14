import { initializeApollo } from '@acter/lib/apollo'
import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { Acter } from '@acter/schema'
import QUERY_FOLLOWED_ACTERS from '@acter/schema/queries/query-followed-acters.graphql'

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

  const { fetching, error, data } = await apollo.query({
    query: QUERY_FOLLOWED_ACTERS,
    variables: { acterId: props?.user?.acterId },
  })

  if (fetching) {
    return {
      props: {
        fetching: true,
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
