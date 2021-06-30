import { Post as PostType } from '@schema'

export const deletePostFromPostList = (
  deletedPost: { id: string; parentId: string },
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
