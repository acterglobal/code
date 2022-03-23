import React from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'
import { getActerLandingPageStaticPaths } from 'static-paths/acter-landing-page-paths'

import { ActerActivities } from '@acter/components/acter/activities'
import { Head } from '@acter/components/atoms/head'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { ActerLayout } from '@acter/components/layout/acter'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const ActerActivitiesPage: NextPageWithLayout = () => {
  const { acter, fetching: acterLoading } = useAuthentication()

  if (acterLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={`${acter?.name} Activities - Acter`} />

      <ActerActivities />
    </>
  )
}

ActerActivitiesPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'interests',
      'success-messages',
      'invitations',
    ])),
  },
})

export const getStaticPaths: GetStaticPaths = getActerLandingPageStaticPaths

export default ActerActivitiesPage
