import React from 'react'

import { NextPage } from 'next'

import { getInterests } from 'props'

import {
  ActivityDetails,
  ActivityDetailsProps,
} from '@acter/components/activity'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { useActer } from '@acter/lib/acter/use-acter'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'

type ActivityLandingPageProps = ActivityDetailsProps

export const ActivityLandingPage: NextPage<ActivityLandingPageProps> = ({
  interestTypes,
}) => {
  const { acter } = useActer()

  return (
    <Layout>
      <Head title={`${acter?.name} - Activity`} />
      <ActivityDetails interestTypes={interestTypes} />
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getInterests)

export default ActivityLandingPage
