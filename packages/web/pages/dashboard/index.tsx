import React from 'react'
import { NextPage } from 'next'

import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'

import { Dashboard } from '@acter/components/dashboard'

const DashboardPage: NextPage = () => {
  return (
    <Layout>
      <Head title="Dashboard - Acter" />

      <Dashboard />
    </Layout>
  )
}

export default DashboardPage
