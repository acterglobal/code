import React from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'
import { getGroupLandingPageStaticPaths } from 'static-paths/group-landing-page-paths'

import { Head } from '@acter/components/atoms/head'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { GroupActivities } from '@acter/components/group/activities'
import { GroupLayout } from '@acter/components/group/layout/overall'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const GroupActivitiesPage: NextPageWithLayout = () => {
  const { acter, fetching: acterLoading } = useAuthentication()

  if (acterLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={`${acter?.name} Activities - Acter`} />
      <GroupActivities />
    </>
  )
}

GroupActivitiesPage.getLayout = (page) => <GroupLayout>{page}</GroupLayout>

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'interests',
      'success-messages',
      'invitations',
      'group-landing',
    ])),
  },
})

export const getStaticPaths: GetStaticPaths = getGroupLandingPageStaticPaths

export default GroupActivitiesPage
