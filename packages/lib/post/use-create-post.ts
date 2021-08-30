import { useState } from 'react'
import { MutationResult, StoreObject, Cache } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import CREATE_POST from '@acter/schema/mutations/post-create.graphql'
import CREATE_COMMENT from '@acter/schema/mutations/comment-create.graphql'
import POST_FRAGMENT from '@acter/schema/fragments/post-display.fragment.graphql'
import { Post as PostType, Acter, User } from '@acter/schema'

export type PostVariables = PostType & {
  acterId: string
  authorId: string
}

type CreatePostData = {
  createPost: PostType
}
type CreatePostOptions = UseMutationOptions<CreatePostData, PostVariables>

export type HandleMethod<TData> = (post: PostType | TData) => Promise<void>

/**
 * Custom hook that creates new post
 * @params acter user displayPostList
 * @returns handle method to create post
 * @returns mutation results from apollo
 */
export const useCreatePost = (
  acter: Acter,
  user: User,
  options?: CreatePostOptions
): [HandleMethod<CreatePostData>, MutationResult] => {
  const [isComment, setIsComment] = useState(false)

  const [createPost, mutationResult] = useNotificationMutation<
    CreatePostData,
    PostVariables
  >(isComment ? CREATE_COMMENT : CREATE_POST, {
    ...options,
    update: (cache, result) => {
      if (typeof options?.update === 'function') {
        const { update, ...restOptions } = options
        update(cache, result, restOptions)
      }
      const {
        data: { createPost: newPost },
      } = result

      const updatePostList = (existingPostRefs = []) => {
        const newPostRef = cache.writeFragment({
          data: newPost,
          fragment: POST_FRAGMENT,
          fragmentName: 'PostDisplay',
        })
        return [...existingPostRefs, newPostRef]
      }

      const parentPost = (newPost.Parent as unknown) as StoreObject
      const cacheOptions: Cache.ModifyOptions = { fields: {} }

      if (newPost.parentId) {
        cacheOptions.id = cache.identify(parentPost)
        cacheOptions.fields.Comments = updatePostList
      } else cacheOptions.fields.posts = updatePostList

      cache.modify(cacheOptions)
    },
    onCompleted: (result) => {
      typeof options?.onCompleted === 'function' && options.onCompleted(result)
    },
    getSuccessMessage: () => (isComment ? 'Comment created' : 'Post created'),
  })

  const handlePost = async (values: PostVariables) => {
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
