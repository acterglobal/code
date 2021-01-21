import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import { useQuery } from '@apollo/client'
import { getSession } from 'next-auth/client'

import { CircularProgress } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import Head from 'next/head'
import { Layout } from 'src/components/layout'

import { ProfileView } from 'src/components/profile/profile-view'

import { User } from '@generated/type-graphql'
import QUERY_PROFILE_BY_EMAIL from 'graphql/queries/query-profile-by-email.graphql'

interface UserProfilePageProps {
  loading?: boolean
  error?: string
  user?: User
}

export const UserProfilePage: NextPage<UserProfilePageProps> = ({
  user,
  loading,
  error,
}) => {
  if (loading) {
    return <CircularProgress />
  }

  if (error) {
    return (
      <Alert severity="error" aria-label="error">
        {error}
      </Alert>
    )
  }

  if (!user) {
    return (
      <Alert severity="warning" aria-label="nothing found">
        Nothing to show
      </Alert>
    )
  }

  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>

      <main>
        <ProfileView user={user} />
      </main>
    </Layout>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession()

  if (!session?.user) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    }
  }

  const { loading, error, data } = useQuery(QUERY_PROFILE_BY_EMAIL, {
    variables: { email: session.user.email },
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

export default UserProfilePage
