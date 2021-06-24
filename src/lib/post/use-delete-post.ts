import { useState } from 'react'
import { MutationResult } from '@apollo/client'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'
import DELETE_POST from 'api/mutations/delete-post.graphql'
import GET_POSTS from 'api/queries/posts-by-acter.graphql'
import { Post } from '@schema'

export type HandleMethod = (id: unknown) => Promise<void>

/**
 * Custom hook that updates a post
 * @param post
 * @returns handle method to update post
 * @returns mutation results from apollo
 */
export const useDeletePost = (
  displayPostList: Post[],
  onComplete: (postList: Post[]) => void
): [HandleMethod, MutationResult] => {
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
  const [deletePost, mutationResult] = useNotificationMutation(DELETE_POST, {
    update: (cache, { data }) => {
      const { deletePost: deletedPost } = data
      console.log('This is comment', isComment)

      if (isComment) {
        const newPostList = deletingComment(deletedPost, displayPostList)
        onComplete(newPostList)
        cache.writeQuery({
          query: GET_POSTS,
          data: {
            posts: newPostList,
          },
        })
      } else {
        const newPostList = deletingPost(deletedPost, displayPostList)
        onComplete(newPostList)
        cache.writeQuery({
          query: GET_POSTS,
          data: {
            posts: newPostList,
          },
        })
      }
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
