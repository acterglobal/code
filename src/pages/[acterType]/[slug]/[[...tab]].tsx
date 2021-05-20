import React, { FC, useEffect, useState } from 'react'
import { NextPage } from 'next'
import { MutationFunction } from '@apollo/client'

import { composeProps, ComposedGetServerSideProps } from 'src/lib/compose-props'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'

import {
  getUserProfile,
  getActer,
  getActerTypes,
  setActerType,
  getInterests,
  getPosts,
} from 'src/props'
import { Head } from 'src/components/layout/head'

import { Acter, InterestType, User, Post } from '@schema'

import { Layout } from 'src/components/layout'
import {
  ActerLanding,
  ActerLandingProps,
} from 'src/components/acter/landing-page'
import { ActivityDetails, ActivityDetailsProps } from 'src/components/activity'

import CREATE_ACTER_CONNECTION from 'api/mutations/acter-connection-create.graphql'
import DELETE_ACTER_CONNECTION from 'api/mutations/acter-connection-delete.graphql'
import UPDATE_ACTER from 'api/mutations/acter-update.graphql'
import GET_ACTER from 'api/queries/acter-by-slug.graphql'
import GET_USER from 'api/queries/user-by-id.graphql'
import { ACTIVITY } from 'src/constants'
import CREATE_POST from 'api/mutations/post-create.graphql'

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

type ActerOrActivityView = ActerLandingProps | ActivityDetailsProps
const getActerView = (acter): FC<ActerOrActivityView> => {
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
  posts: Post[]
}

export const ActerLandingPage: NextPage<ActerLandingPageProps> = ({
  acter,
  interestTypes,
  user,
  posts,
}) => {
  const [displayActer, setDisplayActer] = useState(acter)
  useEffect(() => {
    setDisplayActer(acter)
  }, [acter])

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

  const [
    createConnection,
    { loading: creatingConnection },
  ] = useNotificationMutation(CREATE_ACTER_CONNECTION, {
    update: (cache, { data }) => {
      acter.Followers.push(data.createActerConnection)
      writeCache(cache)
    },
    getSuccessMessage: ({
      createActerConnection: {
        Follower: { name },
      },
    }) => `Connected to ${acter.name} as ${name}`,
  })
  const [
    deleteConnection,
    { loading: deletingConnection },
  ] = useNotificationMutation(DELETE_ACTER_CONNECTION, {
    update: (cache, { data }) => {
      const withoutConnection = (a) => a.id !== data.deleteActerConnection.id
      acter.Followers = acter.Followers.filter(withoutConnection)
      writeCache(cache)
    },
    getSuccessMessage: () => `Disconnected from ${acter.name}`,
  })
  const [
    updateActer,
    { loading: acterUpdateLoading },
  ] = useNotificationMutation(UPDATE_ACTER, {
    getSuccessMessage: () => 'Settings updated',
    onCompleted: (data) => {
      setDisplayActer(data.updateActer)
    },
  })

  const [createPost] = useNotificationMutation(CREATE_POST, {
    getSuccessMessage: () => 'Post created',
  })

  const handlePost = async (postText) => {
    createPost({
      variables: {
        content: postText,
        acterId: acter.id,
        authorId: user.Acter.id,
      },
    })
  }

  const View = getActerView(displayActer)

  return (
    <Layout acter={acter} user={user}>
      <Head title={`${acter.name} - Acter`} />
      <View
        acter={displayActer}
        user={user}
        interestTypes={interestTypes}
        onJoin={_handleJoin(createConnection, user)}
        onLeave={_handleLeave(deleteConnection)}
        onSettingsChange={(acter) => {
          updateActer({
            variables: {
              ...acter,
              interestIds: acter.ActerInterests.map(
                ({ Interest: { id } }) => id
              ),
              acterId: acter.id,
            },
          })
        }}
        loading={creatingConnection || deletingConnection || acterUpdateLoading}
        posts={posts}
        onPostCreate={handlePost}
      />
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(
    ctx,
    getUserProfile(false),
    getActerTypes,
    setActerType,
    getActer,
    getInterests,
    getPosts
  )

export default ActerLandingPage
