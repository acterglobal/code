import { useState } from 'react'
import { MutationResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import CREATE_POST from '@acter/schema/mutations/post-create.graphql'
import CREATE_COMMENT from '@acter/schema/mutations/comment-create.graphql'
import GET_POSTS from '@acter/schema/queries/posts-by-acter.graphql'
import { createNewPostList } from '@acter/lib/post/create-post-new-postlist'
import { Post as PostType, Acter, User } from '@acter/schema/types'

export type PostVariables = PostType & {
  acterId: string
  authorId: string
}

type CreatePostData = {
  createPost: PostType
}
interface CreatePostOptions
  extends UseMutationOptions<CreatePostData, PostVariables> {
  onCompleted: (DeletePostData) => PostType[] | void
}

export type HandleMethod<TData> = (post: PostType | TData) => Promise<void>

/**
 * Custom hook that creates new post
 * @params acter user displayPostList
 * @returns handle method to create post
 * @returns mutation results from apollo
 */
export const useCreatePost = (
  acter: Acter,
  user: User,
  displayPostList: PostType[],
  options?: CreatePostOptions
): [HandleMethod<CreatePostData>, MutationResult] => {
  const [isComment, setIsComment] = useState(false)

  const [createPost, mutationResult] = useNotificationMutation<
    CreatePostData,
    PostVariables
  >(isComment ? CREATE_COMMENT : CREATE_POST, {
    ...options,
    update: (cache, result) => {
      typeof options?.update === 'function' && options.update(cache, result)
      const {
        data: { createPost: newPost },
      } = result

      const newPostList = createNewPostList(newPost, displayPostList)

      cache.writeQuery({
        query: GET_POSTS,
        data: {
          posts: newPostList,
        },
      })
    },
    onCompleted: (result) => {
      const { createPost: newPost } = result

      const newPostList = createNewPostList(newPost, displayPostList)

      typeof options?.onCompleted === 'function' &&
        options.onCompleted(newPostList)

      return newPostList
    },
    getSuccessMessage: () => (isComment ? 'Comment created' : 'Post created'),
  })

  const handlePost = async (values: PostVariables) => {
    setIsComment(values.parentId ? true : false)
    createPost({
      variables: {
        ...values,
        acterId: acter.id,
        authorId: user.Acter.id,
      },
    })
  }

  return [handlePost, mutationResult]
}
