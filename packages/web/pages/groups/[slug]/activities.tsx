import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

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

export default GroupActivitiesPage
