import React from 'react'
import { NextPage } from 'next'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'

import {
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
    <Layout user={user}>
      <Head>
        <title>{acter.name}</title>
      </Head>
      <ActerLanding acter={acter} />
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true), getActerTypes, setActerType, getActer)

export default ActerLandingPage
