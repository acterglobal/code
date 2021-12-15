import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { Dashboard } from '@acter/components/dashboard'

const DashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Dashboard - Acter" />

      <Dashboard />
    </>
  )
}

export default DashboardPage
