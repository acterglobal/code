import React from 'react'

import { useRouter } from 'next/router'

import _ from 'lodash'
import { NextPageWithLayout } from 'pages/_app'

import { Activity } from '@acter/components/activity'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const ActerActivityPage: NextPageWithLayout = () => {
  const router = useRouter()

  const { fetching: acterLoading } = useAuthentication()

  const { acter: activity, fetching: activityloading } = useActer({
    acterId: router.query.id as string,
  })

  if (acterLoading || activityloading) return <LoadingSpinner />

  return (
    <>
      <Head title={`${activity?.name}`} />

      <Activity acter={activity} acterLoading={acterLoading} />
    </>
  )
}

ActerActivityPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerActivityPage
