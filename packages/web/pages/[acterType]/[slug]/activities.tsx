import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { ActerActivities } from '@acter/components/acter/activities'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const ActerActivitiesPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { acter, fetching: acterLoading, redirect } = useAuthentication()

  useEffect(() => {
    // to do fix redirect after login
    if (redirect) {
      router.push(redirect)
    }
  }, [redirect])

  if (acterLoading) return <LoadingSpinner />

  return (
    <>
      <>
        <Head title={`${acter?.name} Activities - Acter`} />

        <ActerActivities />
      </>
    </>
  )
}

ActerActivitiesPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerActivitiesPage
