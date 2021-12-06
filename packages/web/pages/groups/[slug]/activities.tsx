import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { GroupActivities } from '@acter/components/group/activities'
import { GroupLayout } from '@acter/components/group/layout/overall'
import { Head } from '@acter/components/layout/head'
import { useActer } from '@acter/lib/acter/use-acter'

export const ActerActivitiesPage: NextPageWithLayout = () => {
  const { acter } = useActer()
  return (
    <>
      <Head title={`${acter?.name} Activities - Acter`} />
      <GroupActivities />
    </>
  )
}

ActerActivitiesPage.getLayout = (page) => <GroupLayout>{page}</GroupLayout>

export default ActerActivitiesPage
