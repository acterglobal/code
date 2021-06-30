import { useState } from 'react'
import { MutationResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from 'src/lib/apollo/use-notification-mutation'
import CREATE_POST from 'api/mutations/post-create.graphql'
import CREATE_COMMENT from 'api/mutations/comment-create.graphql'
import GET_POSTS from 'api/queries/posts-by-acter.graphql'
import { Post as PostType, Acter, User } from '@schema'

export type PostVariables = {
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

export type HandleMethod = (post: PostType | TData) => Promise<void>

/**
 * Custom hook that creates new post
 * @params acter user displayPostList
 * @returns handle method to create post
 * @returns mutation results from apollo
 */
export const useCreatePost = (
  acter: Acter,
  user: User,
  displayPostList: PostType[]
): [HandleMethod<CreatePostOptions>, MutationResult] => {
  const [isComment, setIsComment] = useState(false)

  const createNewPostList = (
    newPost: { parentId: string },
    displayPostList: PostType[]
  ) => {
    if (newPost.parentId !== null) {
      const newPostList = displayPostList.map((post) => {
        if (post.id === newPost.parentId) {
          return {
            ...post,
            Comments: [...post.Comments, newPost],
          }
        }
        return post
      })
      return newPostList
    } else {
      const newPostList = [newPost, ...displayPostList]
      return newPostList
    }
  }

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

  const handlePost = async (values) => {
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
