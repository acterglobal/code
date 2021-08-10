import { MutationResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import UPDATE_POST from '@acter/schema/mutations/post-update.graphql'
import GET_POSTS from '@acter/schema/queries/posts-by-acter.graphql'
import { updateNewPostList } from '@acter/lib/post/update-post-new-postlist'
import { Post as PostType } from '@acter/schema/types'

export type PostVariables = PostType & {
  postId: string
}

type UpdatePostData = {
  updatePost: PostType
}
interface UpdatePostOptions
  extends UseMutationOptions<UpdatePostData, PostVariables> {
  onCompleted: (UpdatePostData) => PostType[] | void
}

export type HandleMethod<TData> = (post: PostType | TData) => Promise<void>

/**
 * Custom hook that updates a post
 * @param displayPostList
 * @returns handle method to update post
 * @returns mutation results from apollo
 */
export const useUpdatePost = (
  displayPostList: PostType[],
  options?: UpdatePostOptions
): [HandleMethod<UpdatePostData>, MutationResult] => {
  const [updatePost, mutationResult] = useNotificationMutation<
    UpdatePostData,
    PostVariables
  >(UPDATE_POST, {
    update: (cache, result) => {
      if (typeof options?.update === 'function') {
        const { update, ...restOptions } = options
        update(cache, result, restOptions)
      }
      const {
        data: { updatePost: newPost },
      } = result

      const newPostList = updateNewPostList(newPost, displayPostList)

      cache.writeQuery({
        query: GET_POSTS,
        data: {
          posts: newPostList,
        },
      })
    },
    onCompleted: (result) => {
      const { updatePost: newPost } = result

      const newPostList = updateNewPostList(newPost, displayPostList)

      typeof options?.onCompleted === 'function' &&
        options.onCompleted(newPostList)

      return newPostList
    },
    getSuccessMessage: () => 'Post updated',
  })

  const handlePost = async (values: PostVariables) => {
    updatePost({
      variables: {
        ...values,
        postId: values.id,
      },
    })
  }

  return [handlePost, mutationResult]
}
