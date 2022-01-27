import React from 'react'

import { useRouter } from 'next/router'

import _ from 'lodash'
import { NextPageWithLayout } from 'pages/_app'

import { ActivityDetails } from '@acter/components/activity'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'

export const ActerActivityPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { query } = router

  const camelCaseQuery = _.mapKeys(query, (value, key) => _.camelCase(key))
  const { activitySlug } = camelCaseQuery

  const { acter, fetching: acterLoading } = useActer({
    acterTypeName: 'activities',
    slug: activitySlug,
  })

  if (acterLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={`${acter?.name} Activities - Acter`} />

      <ActivityDetails acter={acter} acterLoading={acterLoading} />
    </>
  )
}

ActerActivityPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerActivityPage
