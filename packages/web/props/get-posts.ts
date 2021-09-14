import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { initializeApollo, addApolloState } from '@acter/lib/apollo'

import QUERY_POSTS_BY_ACTER from '@acter/schema/queries/posts-by-acter.graphql'

/**
 *
 * @param ctx.props including the current Acter
 * @returns list of Posts
 */
export const getPosts: ComposedGetServerSideProps = async ({ props }) => {
  const apollo = initializeApollo()
  const { data, error } = await apollo.query({
    query: QUERY_POSTS_BY_ACTER,
    variables: {
      acterId: props.acter?.id,
    },
  })

  if (error) {
    return {
      props: {
        error,
      },
    }
  }

  const { posts } = data

  if (!posts) {
    return {
      props: {},
      notFound: true,
    }
  }

  return addApolloState(apollo, {
    props: {
      posts,
    },
  })
}
