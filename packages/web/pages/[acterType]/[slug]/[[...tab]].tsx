import React, { FC } from 'react'
import { NextPage } from 'next'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import {
  getActer,
  getActerTypes,
  setActerType,
  getInterests,
  getPosts,
  getLinks,
} from 'props'
import { Head } from '@acter/components/layout/head'
import { Acter, InterestType, Link } from '@acter/schema'
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
import { useDeletePost } from '@acter/lib/post/use-delete-post'
import { useCreatePost } from '@acter/lib/post/use-create-post'
import { useUpdatePost } from '@acter/lib/post/use-update-post'
import { useCreateActerConnection } from '@acter/lib/acter/use-create-connection'
import { useUpdateActerConnection } from '@acter/lib/acter/use-update-connection'
import { useDeleteActerConnection } from '@acter/lib/acter/use-delete-connection'
import { useQuery } from '@apollo/client'
import QUERY_ACTER from '@acter/schema/queries/acter-by-slug.graphql'
import GET_POSTS from '@acter/schema/queries/posts-by-acter.graphql'

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
  interestTypes: InterestType[]
  links: Link[]
}

export const ActerLandingPage: NextPage<ActerLandingPageProps> = ({
  acter,
  interestTypes,
  links,
}) => {
  /* This query call fetches the data from cache whenever cache updates */
  const { data: acterData } = useQuery(QUERY_ACTER, {
    variables: {
      acterTypeId: acter.ActerType.id,
      slug: acter.slug,
    },
  })

  const { findFirstActer: displayActer } = acterData

  /* This query call fetches the data from cache whenever cache updates */
  const { data: postsData, loading: postsLoading } = useQuery(GET_POSTS, {
    variables: {
      acterId: acter.id,
    },
  })
  if (postsLoading || !postsData) return null
  const { posts: displayPostList } = postsData

  const View = getActerView(displayActer)

  //TODO: use all these hooks in child components to avoid the prop drilling.
  const [createPost] = useCreatePost(displayActer)
  const [deletePost] = useDeletePost(displayPostList)
  const [updatePost] = useUpdatePost(displayPostList)

  const [
    createActerConnection,
    { loading: creatingConnection },
  ] = useCreateActerConnection(displayActer)

  const [
    updateActerConnection,
    { loading: updatingConnection },
  ] = useUpdateActerConnection(displayActer)

  const [
    deleteActerConnection,
    { loading: deletingConnection },
  ] = useDeleteActerConnection(displayActer)

  return (
    <Layout
      acter={
        acter.ActerType.name === GROUP ? displayActer.Parent : displayActer
      }
      links={links}
    >
      <Head title={`${acter.name} - Acter`} />
      <View
        acter={displayActer}
        interestTypes={interestTypes}
        posts={displayPostList}
        onJoin={createActerConnection}
        onLeave={deleteActerConnection}
        onPostSubmit={createPost}
        onPostUpdate={updatePost}
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
    getActerTypes,
    setActerType,
    getActer,
    getInterests,
    getPosts,
    getLinks
  )

export default ActerLandingPage
