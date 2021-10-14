// TODO: figure out how to test this. For some reason when Jest tries to include Auth0 it throws "Maximum call stack size exceeded"
import { getSession } from '@auth0/nextjs-auth0'

import { initializeApollo, addApolloState } from '@acter/lib/apollo'
import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { Acter } from '@acter/schema'
import GET_USER from '@acter/schema/queries/user-by-email.graphql'

export const getUserProfile = (
  requireUser = true
): ComposedGetServerSideProps => async ({ req, res, resolvedUrl }) => {
  const apollo = initializeApollo()

  // @ts-ignore
  const session = await getSession(req, res)

  if (!session) {
    if (requireUser) {
      const loginUrl = `/api/auth/login?returnTo=${resolvedUrl}`
      return {
        props: {},
        redirect: {
          destination: loginUrl,
        },
      }
    }

    return {
      props: {},
    }
  }

  const { fetching, error, data } = await apollo.query({
    query: GET_USER,
    // TODO: refactor this to use separate accounts with possible merge
    variables: { email: session.user.email },
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

  const { user }: { user: Acter } = data
  return addApolloState(apollo, {
    props: {
      user,
    },
  })
}
