import React from 'react'

import { NextPageWithLayout } from 'pages/_app'
import { getActerTypes, setActerType, getActer, getLinks } from 'props'

import { ActerActivities } from '@acter/components/acter/activities'
import { ActerLayout } from '@acter/components/acter/layout'
import { Head } from '@acter/components/layout/head'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { Acter, Link as LinkType } from '@acter/schema'

interface ActivitiesPageProps {
  acter: Acter
  links: LinkType[]
}

export const ActerActivitiesPage: NextPageWithLayout<ActivitiesPageProps> = ({
  acter,
}) => {
  return (
    <>
      <Head title={`${acter.name} Settings - Acter`} />

      <ActerActivities />
    </>
  )
}

ActerActivitiesPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getActerTypes, setActerType, getActer, getLinks)

export default ActerActivitiesPage
