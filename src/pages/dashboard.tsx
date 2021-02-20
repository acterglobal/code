import React from 'react'
import { NextPage } from 'next'
import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { Acter, User } from '@generated/type-graphql'

import { getToken, getUserProfile, getFollowedActers } from 'src/props'

import { Layout } from 'src/components/layout'

import { Dashboard } from 'src/components/dashboard'

interface DashboardPageProps {
  followingActers: Acter[]
  user: User
}

const DashboardPage: NextPage<DashboardPageProps> = ({
  followingActers,
  user,
}) => (
  <Layout loggedInUser={user}>
    <Dashboard acters={followingActers} />
  </Layout>
)

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getToken, getUserProfile, getFollowedActers)

export default DashboardPage
