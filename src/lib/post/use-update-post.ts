import { MutationResult } from '@apollo/client'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'
import UPDATE_POST from 'api/mutations/post-update.graphql'
import GET_POSTS from 'api/queries/posts-by-acter.graphql'
import { Post } from '@schema'

export type HandleMethod = (values: unknown) => Promise<void>

/**
 * Custom hook that updates a post
 * @param post
 * @returns handle method to update post
 * @returns mutation results from apollo
 */
export const useUpdatePost = (
  displayPostList: Post[],
  onComplete: (postList: Post[]) => void
): [HandleMethod, MutationResult] => {
  const [updatePost, mutationResult] = useNotificationMutation(UPDATE_POST, {
    update: (cache, { data }) => {
      const { updatePost: newPost } = data

      const newPostList = displayPostList.map((post) => {
        if (post.id === newPost.id) {
          return newPost
        }
        return post
      })

      onComplete(newPostList)

      cache.writeQuery({
        query: GET_POSTS,
        data: {
          posts: newPostList,
        },
      })
    },
    getSuccessMessage: () => 'Post created',
  })

  const handlePost = async (values) => {
    updatePost({
      variables: {
        ...values,
        postId: values.id,
      },
    })
  }

  return [handlePost, mutationResult]
}
