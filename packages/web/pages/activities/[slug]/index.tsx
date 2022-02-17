import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

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

export default ActivityLandingPage
