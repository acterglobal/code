import { useState } from 'react'
import { MutationResult } from '@apollo/client'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'
import CREATE_POST from 'api/mutations/post-create.graphql'
import CREATE_COMMENT from 'api/mutations/comment-create.graphql'
import GET_POSTS from 'api/queries/posts-by-acter.graphql'
import { Post, Acter, User } from '@schema'

export type HandleMethod = (values: unknown) => Promise<void>

/**
 * Custom hook that creates new post
 * @param post
 * @returns handle method to create post
 * @returns mutation results from apollo
 */
export const useCreatePost = (
  acter: Acter,
  user: User,
  displayPostList: Post[],
  setDisplayPostList: React.Dispatch<React.SetStateAction<Post[]>>
): [HandleMethod, MutationResult] => {
  const [isComment, setIsComment] = useState(false)

  const createNewPostList = (newPost, displayPostList) => {
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

  const [createPost, mutationResult] = useNotificationMutation(
    isComment ? CREATE_COMMENT : CREATE_POST,
    {
      update: (cache, { data }) => {
        const { createPost: newPost } = data

        const newPostList = createNewPostList(newPost, displayPostList)

        setDisplayPostList(newPostList)
        cache.writeQuery({
          query: GET_POSTS,
          data: {
            posts: newPostList,
          },
        })
      },
      getSuccessMessage: () => 'Post created',
    }
  )

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
