import { initializeApollo, addApolloState } from 'src/lib/apollo'
import { ComposedGetServerSideProps } from 'lib/compose-props'
import { getTokenUser } from 'src/lib/next-auth/jwt'

import { User } from '@schema'

import GET_USER from 'api/queries/user-by-id.graphql'

export const getUserProfile = (
  requireUser = true
): ComposedGetServerSideProps => async ({ req }) => {
  const apollo = initializeApollo()

  // @ts-ignore
  const tokenUser = await getTokenUser(req)

  if (!tokenUser) {
    if (requireUser) {
      return {
        props: {},
        redirect: {
          destination: '/',
        },
      }
    }

    return {
      props: {},
    }
  }

  const { loading, error, data } = await apollo.query({
    query: GET_USER,
    variables: { id: tokenUser.id },
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

  const { user }: { user: User } = data
  return addApolloState(apollo, {
    props: {
      user,
    },
  })
}
