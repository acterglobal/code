import React from 'react'

import { NextPage } from 'next'

import { getActerTypes, setActerType, getActer, getLinks } from 'props'

import { ActerActivities } from '@acter/components/acter/activities'
import { Layout } from '@acter/components/layout'
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

export const ActerActivitiesPage: NextPage<ActivitiesPageProps> = ({
  acter,
}) => {
  return (
    <Layout>
      <Head title={`${acter.name} Settings - Acter`} />

      <ActerActivities />
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getActerTypes, setActerType, getActer, getLinks)

export default ActerActivitiesPage
