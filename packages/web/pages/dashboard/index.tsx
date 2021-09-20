import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { Dashboard } from '@acter/components/dashboard'
import { Head } from '@acter/components/layout/head'

const DashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Dashboard - Acter" />

      <Dashboard />
    </>
  )
}

export default DashboardPage
