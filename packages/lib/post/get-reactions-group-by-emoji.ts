import { PostReaction } from '@acter/schema'

export type PostReactionsData = Record<string, Array<PostReaction>>

/**
 * Gives list of post reactions group by emoji
 * @param reactions list of post reactions from DB
 * @returns reactions list after group by emoji
 */
export const getPostReactionsGroupByEmoji = (
  reactions: PostReaction[] = []
): PostReactionsData =>
  reactions.reduce((result, reaction) => {
    result[reaction.emoji] = [...(result[reaction.emoji] || []), reaction]
    return result
  }, {})
