import { useState } from 'react'

import { MutationResult, StoreObject, Cache, Reference } from '@apollo/client'
import { Modifier } from '@apollo/client/cache/core/types/common'

import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import { useUser } from '@acter/lib/user/use-user'
import { Post as PostType, Acter } from '@acter/schema'
import POST_FRAGMENT from '@acter/schema/fragments/post-display.fragment.graphql'
import CREATE_COMMENT from '@acter/schema/mutations/comment-create.graphql'
import CREATE_POST from '@acter/schema/mutations/post-create.graphql'

export type PostVariables = PostType & {
  acterId: string
  authorId: string
}

type CreatePostData = { createPost: PostType }
type CreatePostOptions = UseMutationOptions<CreatePostData, PostVariables>

export type HandleMethod<TData> = (post: PostType | TData) => Promise<void>

interface CacheModifyOptions extends Cache.ModifyOptions {
  fields: {
    posts?: Modifier<Reference[]>
    Comments?: Modifier<Reference[]>
  }
}

/**
 * Custom hook that creates new post
 * @params acter user displayPostList
 * @returns handle method to create post
 * @returns mutation results from apollo
 */
export const useCreatePost = (
  acter: Acter,
  options?: CreatePostOptions
): [HandleMethod<CreatePostData>, MutationResult] => {
  const [isComment, setIsComment] = useState(false)
  const { user } = useUser()

  const [createPost, mutationResult] = useNotificationMutation<
    CreatePostData,
    PostVariables
  >(isComment ? CREATE_COMMENT : CREATE_POST, {
    ...options,
    update: (cache, result, updateOptions) => {
      options?.update?.(cache, result, updateOptions)

      const {
        data: { createPost: newPost },
      } = result

      const updatePostList = (existingPostRefs = []) => {
        const newPostRef: Reference = cache.writeFragment({
          data: newPost,
          fragment: POST_FRAGMENT,
          fragmentName: 'PostDisplay',
        })
        return isComment
          ? [...existingPostRefs, newPostRef] // new comment appends end of list
          : [newPostRef, ...existingPostRefs] // new post appends beginning of list
      }

      const cacheOptions: CacheModifyOptions = {
        fields: {
          posts: !newPost.parentId ? updatePostList : undefined,
          Comments: newPost.parentId ? updatePostList : undefined,
        },
      }

      if (newPost.parentId) {
        const parentPost = (newPost.Parent as unknown) as StoreObject
        cacheOptions.id = cache.identify(parentPost)
      }

      cache.modify(cacheOptions)
    },
    getSuccessMessage: () => (isComment ? 'Comment created' : 'Post created'),
  })

  const handlePost = async (values: PostVariables) => {
    if (!user) throw 'User is not set.'
    setIsComment(values.parentId ? true : false)
    createPost({
      variables: {
        ...values,
        acterId: acter.id,
        authorId: user.Acter.id,
      },
    })
  }

  return [handlePost, mutationResult]
}
