import { useEffect, useState } from 'react'

import { CombinedError, UseMutationState, OperationResult } from 'urql'

import { useTranslation } from '@acter/lib/i18n/use-translation'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { useUser } from '@acter/lib/user/use-user'
import { Post as PostType, Acter, PostMention } from '@acter/schema'
import CREATE_POST from '@acter/schema/mutations/post-create.graphql'

import { useCreatePostMention } from './use-create-post-mention'

export type PostVariables2 = PostType &
  PostMention & {
    values: { content: string; mentions: PostMention[] }
    acterId: string
    authorId: string
  }

export type PostVariables = PostType & {
  content: string
  mentions: PostMention[]
  parentId: string | null
}

type CreatePostData = { createPost: PostType }

type CreatePostOptions = UseMutationOptions<CreatePostData, PostVariables>

export type HandleMethod<TData> = (
  post: PostType | TData
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<OperationResult<TData, Record<string, any>>>

type CreatePostUseMutationState = UseMutationState<
  CreatePostData,
  PostVariables
>

type CreatePostUseMutationRestState = Omit<
  CreatePostUseMutationState,
  'data' | 'fetching' | 'error>'
>

/**
 * Custom hook that creates new post
 * @params acter user displayPostList
 * @returns handle method to create post
 * @returns mutation results
 */
export const useCreatePost = (
  acter: Acter,
  options?: CreatePostOptions
): [
  (values: PostVariables, mentions: PostMention[]) => Promise<CreatePostData>,
  CreatePostUseMutationState
] => {
  const { t } = useTranslation('success-messages')
  const { user } = useUser()

  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState<CombinedError>()
  const [restState, setRestState] = useState<CreatePostUseMutationRestState>()

  const [
    {
      data: createData,
      fetching: createFetching,
      error: createError,
      ...createRestState
    },
    createPost,
  ] = useNotificationMutation<CreatePostData, PostVariables>(CREATE_POST, {
    ...options,
    getSuccessMessage: () => t('post.created'),
  })

  useEffect(() => {
    if (createFetching) setFetching(true)
  }, [createFetching])

  useEffect(() => {
    if (createError) {
      setError(createError)
      setFetching(false)
    }
  }, [createError])

  useEffect(() => {
    setRestState({
      ...createRestState,
    })
  }, [JSON.stringify(createRestState)])

  const handlePost: (
    values: PostVariables,
    mentions: PostMention[]
  ) => Promise<CreatePostData> = async (
    values: PostVariables,
    mentions: PostMention[]
  ) => {
    if (!user) throw 'User is not set.'
    setFetching(true)
    const { data } = await createPost({
      ...values,
      acterId: acter.id,
      authorId: user.Acter.id,
    })

    const mentionPostId: string = data.createPost.id
    const [createPostMention] = useCreatePostMention()

    const mentionData = {
      mentions,
      postId: mentionPostId,
      createdByUserId: user.id,
    }
    data && createPostMention(mentionData)

    return data
  }

  return [
    handlePost,
    {
      data: createData,
      fetching,
      error,
      ...restState,
    },
  ]
}
