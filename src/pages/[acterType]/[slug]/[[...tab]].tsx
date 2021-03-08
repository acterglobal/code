import React from 'react'
import { NextPage } from 'next'
import { useMutation, MutationFunction } from '@apollo/client'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'

import {
  getUserProfile,
  getActer,
  getActerTypes,
  setActerType,
  getInterests,
} from 'src/props'

import { Acter, InterestType, User } from '@generated/type-graphql'

import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { ActerLanding } from 'src/components/acter/landing-page'
import { ActivityDetails } from 'src/components/activity'

import CREATE_ACTER_CONNECTION from 'api/mutations/acter-connection-create.graphql'
import DELETE_ACTER_CONNECTION from 'api/mutations/acter-connection-delete.graphql'
import GET_ACTER from 'api/queries/acter-by-slug.graphql'
import GET_USER from 'api/queries/user-by-id.graphql'
import { ACTIVITY } from 'src/constants'

const _handleJoin = (createConnection: MutationFunction, user: User) => (
  follower: Acter,
  following: Acter
) =>
  createConnection({
    variables: {
      followerActerId: follower.id,
      followingActerId: following.id,
      createdByUserId: user.id,
    },
  })

const _handleLeave = (deleteConnection: MutationFunction) => (
  follower: Acter,
  following: Acter
) =>
  deleteConnection({
    variables: {
      followerActerId: follower.id,
      followingActerId: following.id,
    },
  })

const getActerView = (acter) => {
  switch (acter.ActerType.name) {
    case ACTIVITY:
      return ActivityDetails
    default:
      return ActerLanding
  }
}

interface ActerLandingPageProps {
  acter: Acter
  interestTypes: InterestType[]
  user: User
}

export const ActerLandingPage: NextPage<ActerLandingPageProps> = ({
  acter,
  interestTypes,
  user,
}) => {
  const writeCache = (cache) => {
    cache.writeQuery({
      query: GET_ACTER,
      data: {
        getActer: acter,
      },
    })
    cache.writeQuery({
      query: GET_USER,
      data: {
        getUser: user,
      },
    })
  }

  const [createConnection, { loading: creatingConnection }] = useMutation(
    CREATE_ACTER_CONNECTION,
    {
      update: (cache, { data }) => {
        acter.Followers.push(data.createActerConnection)
        writeCache(cache)
      },
    }
  )
  const [deleteConnection, { loading: deletingConnection }] = useMutation(
    DELETE_ACTER_CONNECTION,
    {
      update: (cache, { data }) => {
        const withoutConnection = (a) => a.id !== data.deleteActerConnection.id
        acter.Followers = acter.Followers.filter(withoutConnection)
        writeCache(cache)
      },
    }
  )

  const View = getActerView(acter)

  return (
    <Layout user={user}>
      <Head>
        <title>{acter.name} - Acter</title>
      </Head>
      <View
        acter={acter}
        user={user}
        interestTypes={interestTypes}
        onJoin={_handleJoin(createConnection, user)}
        onLeave={_handleLeave(deleteConnection)}
        loading={creatingConnection || deletingConnection}
      />
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(
    ctx,
    getUserProfile(true),
    getActerTypes,
    setActerType,
    getActer,
    getInterests
  )

export default ActerLandingPage
