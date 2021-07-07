import { Post as PostType } from '@acter/schema/types'

export const createNewPostList = (
  newPost: PostType,
  displayPostList: PostType[]
): PostType[] => {
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
