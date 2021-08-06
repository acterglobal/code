import React from 'react'
import { NextPage } from 'next'
import { User } from '@acter/schema'

import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { getUserProfile } from 'props'

import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'

import { Dashboard } from '@acter/components/dashboard'

interface DashboardPageProps {
  user: User
}

const DashboardPage: NextPage<DashboardPageProps> = ({ user }) => {
  return (
    <Layout user={user}>
      <Head title="Dashboard - Acter" />

      <Dashboard user={user} />
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true))

export default DashboardPage
