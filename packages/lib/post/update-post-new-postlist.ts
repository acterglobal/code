import { Post as PostType } from '@acter/schema/types'

export const updateNewPostList = (
  newPost: PostType,
  displayPostList: PostType[]
): PostType[] => {
  const newPostList = displayPostList.map((post) => {
    if (post.id === newPost.id) {
      return newPost
    }
    return post
  })

  return newPostList
}
