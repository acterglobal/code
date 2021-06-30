import { useState } from 'react'
import { MutationResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from 'src/lib/apollo/use-notification-mutation'
import DELETE_POST from 'api/mutations/delete-post.graphql'
import GET_POSTS from 'api/queries/posts-by-acter.graphql'
import { getNewPostList } from 'src/lib/post/delete-update-postlist'
import { Post as PostType } from '@schema'

export type PostVariables = {
  postId: string
}

type DeletePostData = {
  deletePost: {
    id: string
    parentId: string
  }
}

interface DeletePostOptions
  extends UseMutationOptions<DeletePostData, PostVariables> {
  onCompleted: (DeletePostData) => PostType[] | void
}

export type HandleMethod<TData> = (post: PostType | TData) => Promise<void>

/**
 * Custom hook that deletes a post
 * @param post
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

  const handleDeletePost = async (values) => {
    setIsComment(values.parentId ? true : false)
    deletePost({
      variables: {
        postId: values.id,
      },
    })
  }

  return [handleDeletePost, mutationResult]
}
