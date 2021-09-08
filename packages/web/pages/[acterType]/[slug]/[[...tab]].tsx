import React, { FC } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import {
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
import { ActerMenu, ActerTypes } from '@acter/lib/constants'
import { useDeletePost } from '@acter/lib/post/use-delete-post'
import { useCreatePost } from '@acter/lib/post/use-create-post'
import { useUpdatePost } from '@acter/lib/post/use-update-post'
import { useCreateActerConnection } from '@acter/lib/acter/use-create-connection'
import { useUpdateActerConnection } from '@acter/lib/acter/use-update-connection'
import { useDeleteActerConnection } from '@acter/lib/acter/use-delete-connection'
import { useActer } from '@acter/lib/acter/use-acter'
import { usePosts } from '@acter/lib/post/use-posts'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'

const { ACTIVITY, GROUP } = ActerTypes

type ViewTypes = ActerLandingProps | ActivityDetailsProps | GroupLandingProps
// TODO: make below to its own component
const getActerView = (acterType): FC<ViewTypes> => {
  switch (acterType.name) {
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
  interestTypes,
  links,
}) => {
  const router = useRouter()
  const { acter, loading: acterLoading } = useActer()
  const { posts, loading: postsLoading } = usePosts()

  const View = getActerView(acter?.ActerType)

  //TODO: use all these hooks in child components to avoid the prop drilling.
  const [createPost] = useCreatePost(acter)
  const [deletePost] = useDeletePost()
  const [updatePost] = useUpdatePost()

  const [
    createActerConnection,
    { loading: creatingConnection },
  ] = useCreateActerConnection(acter)

  const [
    updateActerConnection,
    { loading: updatingConnection },
  ] = useUpdateActerConnection()

  const [
    deleteActerConnection,
    { loading: deletingConnection },
  ] = useDeleteActerConnection(acter)

  const tab = Array.isArray(router.query.tab)
    ? router.query.tab.join()
    : router.query.tab
  const isPostsTab = tab === ActerMenu.FORUM

  if (acterLoading || (isPostsTab && postsLoading)) return <LoadingSpinner />
  if (!acter) return null

  return (
    <Layout
      acter={acter?.ActerType.name === GROUP ? acter?.Parent : acter}
      links={links}
    >
      <Head title={`${acter?.name} - Acter`} />
      <View
        acter={acter}
        interestTypes={interestTypes}
        posts={posts}
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
    getInterests,
    getPosts,
    getLinks
  )

export default ActerLandingPage
