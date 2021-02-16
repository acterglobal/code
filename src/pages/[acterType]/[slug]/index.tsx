import React from 'react'
import { NextPage } from 'next'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'

import { getActer, getActerTypes, setActerType } from 'src/props'

import { Acter, ActerType } from '@generated/type-graphql'

import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { ActerView } from 'src/components/acter/view'

interface ActerLandingPageProps {
  acterType: ActerType
  acter: Acter
}

export const ActerLandingPage: NextPage<ActerLandingPageProps> = ({
  acterType,
  acter,
}) => {
  return (
    <Layout>
      <Head>
        <title>{acter.name}</title>
      </Head>
      <ActerView acter={acter} />
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getActerTypes, setActerType, getActer)

export default ActerLandingPage
