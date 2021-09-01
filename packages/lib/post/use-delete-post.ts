import { useState } from 'react'
import { MutationResult, Cache, StoreObject } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import DELETE_POST from '@acter/schema/mutations/delete-post.graphql'
import { Post as PostType } from '@acter/schema'

export type PostVariables = {
  postId: string
}

type DeletePostData = {
  deletePost: PostType
}

interface DeletePostOptions
  extends UseMutationOptions<DeletePostData, PostVariables> {
  onCompleted: (DeletePostData) => PostType[] | void
}

export type HandleMethod<TData> = (post: PostType | TData) => Promise<void>

/**
 * Custom hook that deletes a post
 * @param displayPostList
 * @returns handle method to delete post
 * @returns mutation results from apollo
 */

export const useDeletePost = (
  options?: DeletePostOptions
): [HandleMethod<DeletePostData>, MutationResult] => {
  const [isComment, setIsComment] = useState(false)

  const [deletePost, mutationResult] = useNotificationMutation<
    DeletePostData,
    PostVariables
  >(DELETE_POST, {
    ...options,
    update: (cache, result) => {
      if (typeof options?.update === 'function') {
        const { update, ...restOptions } = options
        update(cache, result, restOptions)
      }
      const {
        data: { deletePost: deletedPost },
      } = result

      const updatePostList = (existingPostsRefs, { readField }) =>
        existingPostsRefs.filter(
          (postRef) => deletedPost.id !== readField('id', postRef)
        )

      const parentPost = (deletedPost.Parent as unknown) as StoreObject
      const cacheOptions: Cache.ModifyOptions = { fields: {} }

      if (deletedPost.parentId) {
        cacheOptions.id = cache.identify(parentPost)
        cacheOptions.fields.Comments = updatePostList
      } else cacheOptions.fields.posts = updatePostList

      cache.modify(cacheOptions)
    },
    getSuccessMessage: () => (isComment ? 'Comment deleted' : 'Post deleted'),
  })

  const handleDeletePost = async (values: PostType) => {
    setIsComment(values.parentId ? true : false)
    deletePost({
      variables: {
        postId: values.id,
      },
    })
  }

  return [handleDeletePost, mutationResult]
}
