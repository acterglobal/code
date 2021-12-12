import { Post, PostReaction, User } from '@acter/schema'

/**
 * Gives list of reactions of current user on a particular post
 * @param params an object with post and user
 * @returns list of reactions
 */
export const getMemberReactions = (post: Post, user: User): PostReaction[] =>
  post?.PostReactions.filter((reaction) => reaction.acterId === user?.Acter.id)
