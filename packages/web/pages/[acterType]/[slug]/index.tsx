import React, { FC } from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import {
  ActerLanding,
  ActerLandingProps,
} from '@acter/components/acter/landing-page'
import { ActerLayout } from '@acter/components/acter/layout'
import {
  ActivityDetails,
  ActivityDetailsProps,
} from '@acter/components/activity'
import { GroupLanding, GroupLandingProps } from '@acter/components/group'
import { Head } from '@acter/components/layout/head'
import { PageLoadingSpinner } from '@acter/components/util/page-loading-spinner'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { ActerTypes } from '@acter/lib/constants'
import { InterestType } from '@acter/schema'

const { ACTIVITY, GROUP } = ActerTypes

type ViewTypes = ActerLandingProps | ActivityDetailsProps
// TODO: make below to its own component
const getActerView = (acterType): FC<ViewTypes> => {
  switch (acterType.name) {
    case ACTIVITY:
      return ActivityDetails
    case GROUP:
      return GroupLanding
    default:
      return ActerLanding
  }
}

interface ActerLandingPageProps {
  interestTypes: InterestType[]
}

export const ActerLandingPage: NextPageWithLayout<ActerLandingPageProps> = ({
  interestTypes,
}) => {
  const router = useRouter()
  const { acter, loading: acterLoading } = useActer()

  if (acterLoading) return <PageLoadingSpinner />
  if (!acter) return null

  if (![ACTIVITY, GROUP].includes(acter?.ActerType.name as ActerTypes)) {
    router.push(acterAsUrl({ acter, extraPath: ['forum'] }))
  }

  const View = getActerView(acter?.ActerType)

  return (
    <>
      <Head title={`${acter?.name} - Acter`} />
      <View interestTypes={interestTypes} />
    </>
  )
}

ActerLandingPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getInterests)

export default ActerLandingPage
