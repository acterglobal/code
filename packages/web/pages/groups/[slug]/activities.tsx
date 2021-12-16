import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { GroupActivities } from '@acter/components/group/activities'
import { GroupLayout } from '@acter/components/group/layout/overall'
import { Head } from '@acter/components/layout/head'
import { useActer } from '@acter/lib/acter/use-acter'

export const GroupActivitiesPage: NextPageWithLayout = () => {
  const { acter } = useActer()
  return (
    <>
      <Head title={`${acter?.name} Activities - Acter`} />
      <GroupActivities />
    </>
  )
}

GroupActivitiesPage.getLayout = (page) => <GroupLayout>{page}</GroupLayout>

export default GroupActivitiesPage
