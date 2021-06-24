import { MutationResult } from '@apollo/client'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'
import DELETE_POST from 'api/mutations/delete-post.graphql'
import GET_POSTS from 'api/queries/posts-by-acter.graphql'
import { Post } from '@schema'

export type HandleMethod = (values: unknown) => Promise<void>

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
  const [deleteManyPost, mutationResult] = useNotificationMutation(
    DELETE_POST,
    {
      update: (cache, { data }) => {
        const { deletePost: deletedPost } = data

        const newPostList = displayPostList.filter(
          (post) => post.id !== deletedPost.id
        )

        onComplete(newPostList)

        cache.writeQuery({
          query: GET_POSTS,
          data: {
            posts: newPostList,
          },
        })
      },
      getSuccessMessage: () => 'Post deleted',
    }
  )

  const handleDeletePost = async (id: unknown) => {
    deleteManyPost({
      variables: {
        postId: id,
      },
    })
  }

  return [handleDeletePost, mutationResult]
}
