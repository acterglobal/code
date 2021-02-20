import React from 'react'
import { NextPage } from 'next'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'

import {
  getToken,
  getUserProfile,
  getActer,
  getActerTypes,
  setActerType,
} from 'src/props'

import { Acter, ActerType, User } from '@generated/type-graphql'

import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { ActerLanding } from 'src/components/acter/landing-page'

interface ActerLandingPageProps {
  acterType: ActerType
  acter: Acter
  user?: User
}

export const ActerLandingPage: NextPage<ActerLandingPageProps> = ({
  acterType,
  acter,
  user,
}) => {
  return (
    <Layout loggedInUser={user}>
      <Head>
        <title>{acter.name}</title>
      </Head>
      <ActerLanding acter={acter} />
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(
    ctx,
    getToken,
    getUserProfile,
    getActerTypes,
    setActerType,
    getActer
  )

export default ActerLandingPage
