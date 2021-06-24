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
  getLinks,
} from 'src/props'
import { Head } from 'src/components/layout/head'
import {
  Acter,
  ActerConnection,
  ActerConnectionRole,
  ActerType,
  InterestType,
  Post,
  User,
  Link,
} from '@schema'
import { Layout } from 'src/components/layout'
import {
  ActerLanding,
  ActerLandingProps,
} from 'src/components/acter/landing-page'
import { ActivityDetails, ActivityDetailsProps } from 'src/components/activity'
import { GroupLanding, GroupLandingProps } from 'src/components/group'
import CREATE_ACTER_CONNECTION from 'api/mutations/acter-connection-create.graphql'
import DELETE_ACTER_CONNECTION from 'api/mutations/acter-connection-delete.graphql'
import CREATE_POST from 'api/mutations/post-create.graphql'
import CREATE_COMMENT from 'api/mutations/comment-create.graphql'
import UPDATE_ACTER_CONNECTION from 'api/mutations/acter-connection-update.graphql'
import ACTER_CONNECTION_FRAGMENT from 'api/fragments/acter-connection-full.fragment.graphql'
import GET_POSTS from 'api/queries/posts-by-acter.graphql'
import GET_ACTER from 'api/queries/acter-by-slug.graphql'
import GET_USER from 'api/queries/user-by-id.graphql'
import { ACTIVITY, GROUP } from 'src/constants'
import { useCreateActer } from 'src/lib/acter/use-create-acter'
import { useUpdateActer } from 'src/lib/acter/use-update-acter'
import { updateActerGroups } from 'src/lib/group/update-acter-groups'
import { useDeletePost } from 'src/lib/post/use-delete-post'

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
  const [displayActer, setDisplayActer] = useState(acter)
  const [displayPostList, setDisplayPostList] = useState(posts)
  const [isComment, setIsComment] = useState(false)

  useEffect(() => {
    setDisplayActer(acter)
  }, [acter])

  useEffect(() => {
    setDisplayPostList(posts)
  }, [posts])

  const writeCache = (cache) => {
    cache.writeQuery({
      query: GET_ACTER,
      data: {
        getActer: displayActer,
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

  const [createPost] = useNotificationMutation(
    isComment ? CREATE_COMMENT : CREATE_POST,
    {
      getSuccessMessage: () => 'Post created',
      update: (cache, { data }) => {
        const { createPost: newPost } = data

        if (newPost.parentId !== null) {
          const newPostList = displayPostList.map((post) => {
            if (post.id === newPost.parentId) {
              return {
                ...post,
                Comments: [...post.Comments, newPost],
              }
            }
            return post
          })
          setDisplayPostList(newPostList)
          cache.writeQuery({
            query: GET_POSTS,
            data: {
              posts: newPostList,
            },
          })
        } else {
          const newPostList = [newPost, ...displayPostList]
          setDisplayPostList(newPostList)
          cache.writeQuery({
            query: GET_POSTS,
            data: {
              posts: newPostList,
            },
          })
        }
      },
    }
  )

  const handlePost = async (values) => {
    setIsComment(values.parentId ? true : false)
    createPost({
      variables: {
        ...values,
        acterId: acter.id,
        authorId: user.Acter.id,
      },
    })
  }

  const View = getActerView(displayActer)

  const [createGroup] = useCreateActer({
    onCompleted: ({ createActer }) => {
      setDisplayActer(updateActerGroups(displayActer, createActer))
    },
  })
  const [updateGroup] = useUpdateActer(displayActer, {
    onCompleted: ({ updateActer }) =>
      setDisplayActer(updateActerGroups(displayActer, updateActer)),
  })

  const [deletePost] = useDeletePost(displayPostList, (postList) =>
    setDisplayPostList(postList)
  )

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
        onJoin={_handleJoin(createConnection)}
        onLeave={_handleLeave(deleteConnection)}
        onPostSubmit={handlePost}
        onGroupSubmit={updateGroup}
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
    getPosts,
    getLinks
  )

export default ActerLandingPage
