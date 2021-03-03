import React from 'react'
import { NextPage } from 'next'
import { User } from '@generated/type-graphql'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile } from 'src/props'

import { Layout } from 'src/components/layout'

import { Dashboard } from 'src/components/dashboard'

interface DashboardPageProps {
  user: User
}

const DashboardPage: NextPage<DashboardPageProps> = ({ user }) => {
  console.log('DashboardPage', user)
  return (
    <Layout user={user}>
      <Dashboard
        acters={user.Acter?.Following?.map(
          (connection) => connection.Following
        )}
      />
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true))

export default DashboardPage
