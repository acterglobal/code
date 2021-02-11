import { initializeApollo } from 'src/lib/apollo'
import { ComposedGetServerSideProps } from 'lib/compose-props'

import { User } from '@generated/type-graphql'

import QUERY_PROFILE_BY_EMAIL from 'graphql/queries/query-profile-by-email.graphql'

export const getUserProfile: ComposedGetServerSideProps = async (ctx) => {
  const apollo = initializeApollo()

  if (!ctx.props?.tokenUser?.email) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    }
  }

  const { loading, error, data } = await apollo.query({
    query: QUERY_PROFILE_BY_EMAIL,
    variables: { email: ctx.props?.tokenUser?.email },
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
  return {
    props: {
      user,
    },
  }
}
