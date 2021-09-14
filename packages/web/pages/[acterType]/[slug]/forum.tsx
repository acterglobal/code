import { NextPage } from 'next'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import {
  getUserProfile,
  getActerTypes,
  setActerType,
  getActer,
  getLinks,
  getInterests,
} from 'props'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { Acter, InterestType, Link as LinkType, User } from '@acter/schema'
import { useCreateActerConnection } from '@acter/lib/acter/use-create-connection'
import { useDeleteActerConnection } from '@acter/lib/acter/use-delete-connection'
import { useQuery } from '@apollo/client'
import QUERY_ACTER from '@acter/schema/queries/acter-by-slug.graphql'
import GET_POSTS from '@acter/schema/queries/posts-by-acter.graphql'
import { ActerPosts } from '@acter/components/acter/posts'
import { useCreatePost } from '@acter/lib/post/use-create-post'
import { useDeletePost } from '@acter/lib/post/use-delete-post'
import { useUpdatePost } from '@acter/lib/post/use-update-post'

interface PostsPageProps {
  acter: Acter
  user: User
  links: LinkType[]
  interestTypes: InterestType[]
}

export const ActerPostsPage: NextPage<PostsPageProps> = ({
  acter,
  user,
  interestTypes,
  links,
}) => {
  /* This query call fetches the cache data whenever cache updates */
  const { data } = useQuery(QUERY_ACTER, {
    variables: {
      acterTypeId: acter.ActerType.id,
      slug: acter.slug,
    },
  })

  const { findFirstActer: displayActer } = data

  /* This query call fetches the data from cache whenever cache updates */
  const { data: postsData, loading: postsLoading } = useQuery(GET_POSTS, {
    variables: {
      acterId: acter.id,
    },
  })
  if (postsLoading || !postsData) return null
  const { posts: displayPostList } = postsData

  const [createPost] = useCreatePost(displayActer, user)
  const [deletePost] = useDeletePost(displayPostList)
  const [updatePost] = useUpdatePost(displayPostList)

  const [
    createActerConnection,
    { loading: creatingConnection },
  ] = useCreateActerConnection(displayActer)

  const [
    deleteActerConnection,
    { loading: deletingConnection },
  ] = useDeleteActerConnection(displayActer)

  return (
    <Layout acter={displayActer} user={user} links={links}>
      <Head title={`${acter.name}  - forum`} />
      <ActerPosts
        acter={displayActer}
        user={user}
        interestTypes={interestTypes}
        posts={displayPostList}
        onJoin={createActerConnection}
        onLeave={deleteActerConnection}
        loading={creatingConnection || deletingConnection}
        onPostSubmit={createPost}
        onPostUpdate={updatePost}
        onPostDelete={deletePost}
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
    getInterests,
    getLinks
  )

export default ActerPostsPage
