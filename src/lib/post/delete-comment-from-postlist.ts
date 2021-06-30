import { Post as PostType } from '@schema'

export const deleteCommentFromPostList = (
  deletedPost: { id: string; parentId: string },
  displayPostList: PostType[]
): PostType[] => {
  const newPostList = displayPostList.map((post) => {
    if (post.id === deletedPost.parentId) {
      const newComments = post.Comments.filter(
        (comment) => comment.id !== deletedPost.id
      )
      return {
        ...post,
        Comments: newComments,
      }
    }
    return post
  })
  return newPostList
}
