import React from 'react'
import { NextPage } from 'next'
import { useMutation, MutationFunction } from '@apollo/client'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'

import {
  getUserProfile,
  getActer,
  getActerTypes,
  setActerType,
} from 'src/props'

import { Acter, User } from '@generated/type-graphql'

import Head from 'next/head'
import { Layout } from 'src/components/layout'
import { ActerLanding } from 'src/components/acter/landing-page'

import CREATE_ACTER_CONNECTION from 'graphql/mutations/acter-connection-create.graphql'
import DELETE_ACTER_CONNECTION from 'graphql/mutations/acter-connection-delete.graphql'
import GET_ACTER from 'graphql/queries/acter-by-slug.graphql'
import GET_USER from 'graphql/queries/user-by-id.graphql'

interface ActerLandingPageProps {
  acter: Acter
  user: User
}

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

export const ActerLandingPage: NextPage<ActerLandingPageProps> = ({
  acter,
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

  return (
    <Layout user={user}>
      <Head>
        <title>{acter.name} - Acter</title>
      </Head>
      <ActerLanding
        acter={acter}
        user={user}
        onJoin={_handleJoin(createConnection, user)}
        onLeave={_handleLeave(deleteConnection)}
        loading={creatingConnection || deletingConnection}
      />
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true), getActerTypes, setActerType, getActer)

export default ActerLandingPage
