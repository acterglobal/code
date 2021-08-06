import React, { FC, useEffect, useState } from 'react'
import { NextPage } from 'next'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import {
  getUserProfile,
  getActer,
  getActerTypes,
  setActerType,
  getInterests,
  getPosts,
  getLinks,
} from 'props'
import { Head } from '@acter/components/layout/head'
import { Acter, ActerType, InterestType, Post, User, Link } from '@acter/schema'
import { Layout } from '@acter/components/layout'
import {
  ActerLanding,
  ActerLandingProps,
} from '@acter/components/acter/landing-page'
import {
  ActivityDetails,
  ActivityDetailsProps,
} from '@acter/components/activity'
import { GroupLanding, GroupLandingProps } from '@acter/components/group'
import { ActerTypes } from '@acter/lib/constants'
import { useCreateActer } from '@acter/lib/acter/use-create-acter'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { updateActerGroups } from '@acter/lib/group/update-acter-groups'
import { useDeletePost } from '@acter/lib/post/use-delete-post'
import { useCreatePost } from '@acter/lib/post/use-create-post'
import { useUpdatePost } from '@acter/lib/post/use-update-post'
import { useCreateActerConnection } from '@acter/lib/acter/use-create-connection'
import { useUpdateActerConnection } from '@acter/lib/acter/use-update-connection'
import { useDeleteActerConnection } from '@acter/lib/acter/use-delete-connection'

const { ACTIVITY, GROUP } = ActerTypes

type ViewTypes = ActerLandingProps | ActivityDetailsProps | GroupLandingProps
// TODO: make below to its own component
const getActerView = (acter): FC<ViewTypes> => {
  switch (acter.ActerType.name) {
    case ACTIVITY:
      return ActivityDetails
    case GROUP:
      return GroupLanding
    default:
      return ActerLanding
  }
}

interface ActerLandingPageProps {
  acter: Acter
  acterTypes: ActerType[]
  interestTypes: InterestType[]
  user: User
  posts: Post[]
  links: Link[]
}

export const ActerLandingPage: NextPage<ActerLandingPageProps> = ({
  acter,
  acterTypes,
  interestTypes,
  user,
  posts,
  links,
}) => {
  //TODO: use apollo client reactive variables instead of state
  const [displayActer, setDisplayActer] = useState(acter)
  const [displayPostList, setDisplayPostList] = useState(posts)

  useEffect(() => {
    setDisplayActer(acter)
  }, [acter])

  useEffect(() => {
    setDisplayPostList(posts)
  }, [posts])

  const View = getActerView(displayActer)

  //TODO: use all these hooks in child components to avoid the prop drilling.
  const [createGroup] = useCreateActer({
    onCompleted: ({ createActer }) => {
      setDisplayActer(updateActerGroups(displayActer, createActer))
    },
  })
  const [updateGroup] = useUpdateActer(displayActer, {
    onCompleted: ({ updateActer }) =>
      setDisplayActer(updateActerGroups(displayActer, updateActer)),
  })

  const [createPost] = useCreatePost(acter, user, displayPostList, {
    onCompleted: setDisplayPostList,
  })

  const [deletePost] = useDeletePost(displayPostList, {
    onCompleted: setDisplayPostList,
  })

  const [updatePost] = useUpdatePost(displayPostList, {
    onCompleted: setDisplayPostList,
  })

  const [createActerConnection, { loading: creatingConnection }] =
    useCreateActerConnection(displayActer)

  const [updateActerConnection, { loading: updatingConnection }] =
    useUpdateActerConnection(displayActer)

  const [deleteActerConnection, { loading: deletingConnection }] =
    useDeleteActerConnection(displayActer)

  return (
    <Layout
      acter={
        acter.ActerType.name === GROUP ? displayActer.Parent : displayActer
      }
      acterTypes={acterTypes}
      user={user}
      onGroupSubmit={createGroup}
      links={links}
    >
      <Head title={`${acter.name} - Acter`} />
      <View
        acter={displayActer}
        acterTypes={acterTypes}
        user={user}
        interestTypes={interestTypes}
        posts={displayPostList}
        onJoin={createActerConnection}
        onLeave={deleteActerConnection}
        onPostSubmit={createPost}
        onPostUpdate={updatePost}
        onGroupSubmit={updateGroup}
        onPostDelete={deletePost}
        onConnectionStateChange={updateActerConnection}
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
    getPosts,
    getLinks
  )

export default ActerLandingPage
