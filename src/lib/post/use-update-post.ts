import { MutationResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from 'src/lib/apollo/use-notification-mutation'
import UPDATE_POST from 'api/mutations/post-update.graphql'
import GET_POSTS from 'api/queries/posts-by-acter.graphql'
import { updateNewPostList } from 'src/lib/post/update-post-new-postlist'
import { Post as PostType } from '@schema'

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
      typeof options?.update === 'function' && options.update(cache, result)
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
    getSuccessMessage: () => 'Post created',
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
