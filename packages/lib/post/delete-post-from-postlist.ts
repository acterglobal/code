import { Post as PostType } from '@acter/schema/types'

export const deletePostFromPostList = (
  deletedPost: PostType,
  displayPostList: PostType[]
): PostType[] => {
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
