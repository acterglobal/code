import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { ActerActivities } from '@acter/components/acter/activities'
import { ActerLayout } from '@acter/components/acter/layout'
import { Head } from '@acter/components/layout/head'
import { useActer } from '@acter/lib/acter/use-acter'

export const ActerActivitiesPage: NextPageWithLayout = () => {
  const { acter } = useActer()
  return (
    <>
      <Head title={`${acter?.name} Activities - Acter`} />

      <ActerActivities />
    </>
  )
}

ActerActivitiesPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerActivitiesPage
