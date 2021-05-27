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

import {
  Acter,
  ActerConnection,
  ActerConnectionRole,
  InterestType,
  Post,
  User,
} from '@schema'

import { Layout } from 'src/components/layout'
import {
  ActerLanding,
  ActerLandingProps,
} from 'src/components/acter/landing-page'
import { ActivityDetails, ActivityDetailsProps } from 'src/components/activity'

import CREATE_ACTER_CONNECTION from 'api/mutations/acter-connection-create.graphql'
import DELETE_ACTER_CONNECTION from 'api/mutations/acter-connection-delete.graphql'
import CREATE_POST from 'api/mutations/post-create.graphql'
import UPDATE_ACTER_CONNECTION from 'api/mutations/acter-connection-update.graphql'
import ACTER_CONNECTION_FRAGMENT from 'api/fragments/acter-connection-full.fragment.graphql'
import GET_POSTS from 'api/queries/posts-by-acter.graphql'
import GET_ACTER from 'api/queries/acter-by-slug.graphql'
import GET_USER from 'api/queries/user-by-id.graphql'
import { ACTIVITY } from 'src/constants'

const _handleJoin = (createConnection: MutationFunction) => (
  following: Acter,
  follower: Acter
) =>
  createConnection({
    variables: {
      followerActerId: follower.id,
      followingActerId: following.id,
    },
  })

const _handleLeave = (deleteConnection: MutationFunction) => (
  following: Acter,
  follower: Acter
) =>
  deleteConnection({
    variables: {
      followerActerId: follower.id,
      followingActerId: following.id,
    },
  })

const _handleConnectionUpdate = (updateConnection: MutationFunction) => (
  connection: ActerConnection,
  role: ActerConnectionRole
) =>
  updateConnection({
    variables: {
      connectionId: connection.id,
      role: role,
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
  const [displayPostList, setDisplayPostList] = useState(posts)
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
    updateConnection,
    { loading: updatingConnection },
  ] = useNotificationMutation(UPDATE_ACTER_CONNECTION, {
    update: (cache, { data }) => {
      const { updateActerConnection: connection } = data
      const connectionIndex = acter.Followers.findIndex(
        ({ Follower }) => Follower.id === connection.followerActerId
      )
      acter.Followers = [
        ...acter.Followers.slice(0, connectionIndex),
        connection,
        ...acter.Followers.slice(connectionIndex + 1, acter.Followers.length),
      ]
      cache.writeFragment({
        id: cache.identify(connection),
        fragment: ACTER_CONNECTION_FRAGMENT,
        fragmentName: 'ActerConnectionFull',
        data: connection,
      })
    },
  })

  const [createPost] = useNotificationMutation(CREATE_POST, {
    getSuccessMessage: () => 'Post created',
    update: (cache, { data }) => {
      const newPostList = [data.createPost, ...displayPostList]
      setDisplayPostList(newPostList)
      cache.writeQuery({
        query: GET_POSTS,
        data: {
          posts: newPostList,
        },
      })
    },
  })

  const handlePost = async ({ content }) => {
    createPost({
      variables: {
        content,
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
        posts={displayPostList}
        onJoin={_handleJoin(createConnection)}
        onLeave={_handleLeave(deleteConnection)}
        onPostSubmit={handlePost}
        onConnectionStateChange={_handleConnectionUpdate(updateConnection)}
        loading={creatingConnection || deletingConnection || updatingConnection}
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
