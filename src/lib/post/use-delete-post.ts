import { useState } from 'react'
import { MutationResult } from '@apollo/client'
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

  const deleteCommentFromPostList = (
    deletedPost: { id: string; parentId: string },
    displayPostList: PostType[]
  ) => {
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

  const deletePostFromPostList = (
    deletedPost: { id: string; parentId: string },
    displayPostList: PostType[]
  ) => {
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

  const getNewPostList = (
    deletedPost: { id: string; parentId: string },
    displayPostList: PostType[]
  ) => {
    const newPostList = isComment
      ? deleteCommentFromPostList(deletedPost, displayPostList)
      : deletePostFromPostList(deletedPost, displayPostList)
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

      const newPostList = getNewPostList(deletedPost, displayPostList)

      cache.writeQuery({
        query: GET_POSTS,
        data: {
          posts: newPostList,
        },
      })
    },
    onCompleted: (result) => {
      const { deletePost: deletedPost } = result

      const newPostList = getNewPostList(deletedPost, displayPostList)

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
