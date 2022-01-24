import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { GroupActivities } from '@acter/components/group/activities'
import { GroupLayout } from '@acter/components/group/layout/overall'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const GroupActivitiesPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { acter, fetching: acterLoading, redirect } = useAuthentication()

  useEffect(() => {
    if (redirect) {
      router.push(redirect)
    }
  }, [redirect])

  if (acterLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={`${acter?.name} Activities - Acter`} />
      <GroupActivities />
    </>
  )
}

GroupActivitiesPage.getLayout = (page) => <GroupLayout>{page}</GroupLayout>

export default GroupActivitiesPage
