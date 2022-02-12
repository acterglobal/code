import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { Activity as ActivityLanding } from '@acter/components/activity'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const ActivityLandingPage: NextPageWithLayout = () => {
  const { acter, fetching: acterLoading } = useAuthentication()

  if (acterLoading || !acter) return <LoadingSpinner />

  return (
    <>
      <Head title={acter?.name} />

      <ActivityLanding acter={acter} />
    </>
  )
}

ActivityLandingPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActivityLandingPage
