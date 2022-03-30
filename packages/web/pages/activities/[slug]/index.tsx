import React from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'
import { getActivityLandingPageStaticPaths } from 'static-paths/activity-landing-page-paths'

import { Activity as ActivityLanding } from '@acter/components/activity'
import { Head } from '@acter/components/atoms/head'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { ActerLayout } from '@acter/components/layout/acter'
import { useActerTitle } from '@acter/lib/acter/use-title'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const ActivityLandingPage: NextPageWithLayout = () => {
  const { title } = useActerTitle('Activity')
  const { acter, fetching: acterLoading } = useAuthentication()

  if (acterLoading || !acter) return <LoadingSpinner />

  return (
    <>
      <Head title={title} />

      <ActivityLanding acter={acter} />
    </>
  )
}

ActivityLandingPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'interests',
      'success-messages',
      'invitations',
      'settings',
    ])),
  },
})

export const getStaticPaths: GetStaticPaths = getActivityLandingPageStaticPaths

export default ActivityLandingPage
