import React from 'react'
import { NextPage } from 'next'

import { CircularProgress } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import Head from 'next/head'
import { Layout } from 'src/components/layout'

import { ProfileView } from 'src/components/user/profile-view'

import { User } from '@generated/type-graphql'
import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile } from 'src/props'

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
    <Layout user={user}>
      <Head>
        <title>Profile</title>
      </Head>

      <main>
        <ProfileView user={user} />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true))

export default UserProfilePage
