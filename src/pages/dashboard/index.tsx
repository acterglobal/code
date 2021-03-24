import React from 'react'
import { NextPage } from 'next'
import { User } from '@schema'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile } from 'src/props'

import { Layout } from 'src/components/layout'

import { Dashboard } from 'src/components/dashboard'

interface DashboardPageProps {
  user: User
}

const DashboardPage: NextPage<DashboardPageProps> = ({ user }) => {
  return (
    <Layout headTitle="Dashboard - Acter" user={user}>
      <Dashboard user={user} />
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true))

export default DashboardPage
