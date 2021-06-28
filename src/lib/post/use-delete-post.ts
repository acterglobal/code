import { useState } from 'react'
import { MutationResult, FetchResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from 'src/lib/apollo/use-notification-mutation'
import DELETE_POST from 'api/mutations/delete-post.graphql'
import GET_POSTS from 'api/queries/posts-by-acter.graphql'
import { Post as PostType } from '@schema'

export type PostVariables = {
  postId: string
}

// What returns after deletion
type DeletePostData = {
  // id: string
  // parentId: string
  deletePost: {
    id: string
    parentId: string
  }
}

type DeletePostOptions = UseMutationOptions<DeletePostData, PostVariables>

export type HandleMethod<TData> = (
  postId: PostVariables
) => Promise<FetchResult<TData, Record<string, any>, Record<string, any>>>

/**
 * Custom hook that deletes a post
 * @param post
 * @returns handle method to delete post
 * @returns mutation results from apollo
 */

export const useDeletePost = (
  displayPostList: PostType[],
  onComplete: (postList: PostType[]) => void,
  options?: DeletePostOptions
): [HandleMethod<DeletePostData>, MutationResult] => {
  const [isComment, setIsComment] = useState(false)

  const deletingComment = (deletedPost, displayPostList) => {
    const newPostList = displayPostList.map((post) => {
      if (post.id === deletedPost.parentId) {
        const newComments = post.Comments.filter(
          (comment) => comment.id !== deletedPost.id
        )
        return {
          ...post,
          Comments: newComments,
        }
      }
      return post
    })
    return newPostList
  }

  const deletingPost = (deletedPost, displayPostList) => {
    const removedCommentsList = displayPostList.map((post) => {
      if (post.id === deletedPost.parentId) {
        return {
          ...post,
          Comments: [],
        }
      }
      return post
    })

    const newPostList = removedCommentsList.filter(
      (post) => post.id !== deletedPost.id
    )
    return newPostList
  }

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

      const newPostList = isComment
        ? deletingComment(deletedPost, displayPostList)
        : deletingPost(deletedPost, displayPostList)

      onComplete(newPostList)

      cache.writeQuery({
        query: GET_POSTS,
        data: {
          posts: newPostList,
        },
      })
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
