import { Post as PostType } from '@acter/schema/types'

export const updateNewPostList = (
  newPost: PostType,
  displayPostList: PostType[]
): PostType[] => {
  if (newPost.parentId !== null) {
    const newPostList = displayPostList.map((post) => {
      if (post.id === newPost.parentId) {
        const newCommentList = post.Comments.map((comment) => {
          if (comment.id === newPost.id) {
            return newPost
          }
          return comment
        })
        return {
          ...post,
          Comments: newCommentList,
        }
      }
      return post
    })
    return newPostList
  } else {
    const newPostList = displayPostList.map((post) => {
      if (post.id === newPost.id) {
        return newPost
      }
      return post
    })

    return newPostList
  }
}
