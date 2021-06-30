import { Post as PostType } from '@schema'
import { deletePostFromPostList } from 'src/lib/post/delete-post-from-postlist'
import { deleteCommentFromPostList } from 'src/lib/post/delete-comment-from-postlist'

export const getNewPostList = (
  deletedPost: { id: string; parentId: string },
  displayPostList: PostType[],
  isComment: boolean
): PostType[] => {
  const newPostList = isComment
    ? deleteCommentFromPostList(deletedPost, displayPostList)
    : deletePostFromPostList(deletedPost, displayPostList)
  return newPostList
}
