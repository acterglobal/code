import { useState } from 'react'
import { MutationResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import DELETE_POST from '@acter/schema/mutations/delete-post.graphql'
import GET_POSTS from '@acter/schema/queries/posts-by-acter.graphql'
import { getNewPostList } from '@acter/lib/post/delete-update-postlist'
import { Post as PostType } from '@acter/schema/types'

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
  displayPostList: PostType[],
  options?: DeletePostOptions
): [HandleMethod<DeletePostData>, MutationResult] => {
  const [isComment, setIsComment] = useState(false)

  const [deletePost, mutationResult] = useNotificationMutation<
    DeletePostData,
    PostVariables
  >(DELETE_POST, {
    ...options,
    update: (cache, result) => {
      typeof options?.update === 'function' && options.update(cache, result)
      const {
        data: { deletePost: deletedPost },
      } = result

      const newPostList = getNewPostList(
        deletedPost,
        displayPostList,
        isComment
      )

      cache.writeQuery({
        query: GET_POSTS,
        data: {
          posts: newPostList,
        },
      })
    },
    onCompleted: (result) => {
      const { deletePost: deletedPost } = result

      const newPostList = getNewPostList(
        deletedPost,
        displayPostList,
        isComment
      )

      typeof options?.onCompleted === 'function' &&
        options.onCompleted(newPostList)

      return newPostList
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
