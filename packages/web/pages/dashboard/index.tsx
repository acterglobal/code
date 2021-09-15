import React from 'react'

import { NextPage } from 'next'

import { Dashboard } from '@acter/components/dashboard'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'

const DashboardPage: NextPage = () => {
  return (
    <Layout>
      <Head title="Dashboard - Acter" />

      <Dashboard />
    </Layout>
  )
}

export default DashboardPage
