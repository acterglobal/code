// TODO: figure out how to test this. For some reason when Jest tries to include Auth0 it throws "Maximum call stack size exceeded"
import { getSession } from '@auth0/nextjs-auth0'

import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { getUrqlClient } from '@acter/lib/urql'
import { Acter } from '@acter/schema'
import GET_USER from '@acter/schema/queries/user-by-email.graphql'

export const getUserProfile = (
  requireUser = true
): ComposedGetServerSideProps => async ({ req, res, resolvedUrl }) => {
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

  const { error, data } = await getUrqlClient()
    .query(GET_USER, {
      // TODO: refactor this to use separate accounts with possible merge
      email: session.user.email,
    })
    .toPromise()

  if (error) {
    return {
      props: {
        error,
      },
    }
  }

  const { user }: { user: Acter } = data
  return {
    props: {
      user,
    },
  }
}
