import { Post as PostType } from '@acter/schema'
import { deletePostFromPostList } from '@acter/lib/post/delete-post-from-postlist'
import { deleteCommentFromPostList } from '@acter/lib/post/delete-comment-from-postlist'

export const getNewPostList = (
  deletedPost: PostType,
  displayPostList: PostType[],
  isComment: boolean
): PostType[] => {
  const newPostList = isComment
    ? deleteCommentFromPostList(deletedPost, displayPostList)
    : deletePostFromPostList(deletedPost, displayPostList)
  return newPostList
}
