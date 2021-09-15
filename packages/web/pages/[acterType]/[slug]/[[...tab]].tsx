import React, { FC } from 'react'

import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { getActerTypes, setActerType, getInterests, getPosts } from 'props'

import {
  ActerLanding,
  ActerLandingProps,
} from '@acter/components/acter/landing-page'
import {
  ActivityDetails,
  ActivityDetailsProps,
} from '@acter/components/activity'
import { GroupLanding, GroupLandingProps } from '@acter/components/group'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { PageLoadingSpinner } from '@acter/components/util/page-loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUpdateActerConnection } from '@acter/lib/acter/use-update-connection'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { ActerMenu, ActerTypes } from '@acter/lib/constants'
import { useCreatePost } from '@acter/lib/post/use-create-post'
import { useDeletePost } from '@acter/lib/post/use-delete-post'
import { usePosts } from '@acter/lib/post/use-posts'
import { useUpdatePost } from '@acter/lib/post/use-update-post'
import { Acter, InterestType } from '@acter/schema'

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
}

export const ActerLandingPage: NextPage<ActerLandingPageProps> = ({
  interestTypes,
}) => {
  const router = useRouter()
  const { acter, loading: acterLoading } = useActer()
  const { posts, loading: postsLoading } = usePosts()

  //TODO: use all these hooks in child components to avoid the prop drilling.
  const [createPost] = useCreatePost(acter)
  const [deletePost] = useDeletePost()
  const [updatePost] = useUpdatePost()

  const tab = Array.isArray(router.query.tab)
    ? router.query.tab.join()
    : router.query.tab
  const isPostsTab = tab === ActerMenu.FORUM

  if (acterLoading || (isPostsTab && postsLoading))
    return <PageLoadingSpinner />
  if (!acter) return null

  const View = getActerView(acter?.ActerType)

  return (
    <Layout>
      <Head title={`${acter?.name} - Acter`} />
      <View
        acter={acter}
        interestTypes={interestTypes}
        posts={posts}
        onPostSubmit={createPost}
        onPostUpdate={updatePost}
        onPostDelete={deletePost}
      />
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getActerTypes, setActerType, getInterests, getPosts)

export default ActerLandingPage
