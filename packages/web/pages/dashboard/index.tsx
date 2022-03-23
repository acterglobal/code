import React from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'interests',
      'success-messages',
      'dashboard',
    ])),
  },
})

export default DashboardPage
