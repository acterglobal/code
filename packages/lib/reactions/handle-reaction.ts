import {
  HandleMethod as CreateReaction,
  HandleMethodReturnType as CreateReactionReturnType,
} from '@acter/lib/post/use-create-post-reaction'
import {
  HandleMethod as DeleteReaction,
  HandleMethodReturnType as DeleteReactionReturnType,
} from '@acter/lib/post/use-delete-post-reaction'
import { getMemberReactions } from '@acter/lib/reactions/get-member-reactions'
import { Post, User } from '@acter/schema'

export type EmojiData = {
  emoji: string
  emojiUnicode: string
}
type Params = {
  post: Post
  user: User
  emojiData: EmojiData
  createReaction: CreateReaction
  deleteReaction: DeleteReaction
}
type ReturnType = DeleteReactionReturnType | CreateReactionReturnType

/**
 * It adds reaction if not exist, otherwise it deletes
 * @param params params that needed to delete or create reaction
 * @returns
 */
export const handleReaction = ({
  emojiData,
  post,
  user,
  createReaction,
  deleteReaction,
}: Params): ReturnType => {
  if (!user) return null

  const memberReactions = getMemberReactions(post, user)

  const reaction = memberReactions.find(
    (reaction) => reaction.emoji === emojiData.emoji
  )

  if (reaction?.id) {
    return deleteReaction({ id: reaction.id })
  }

  createReaction({
    postId: post.id,
    acterId: user.Acter.id,
    createdByUserId: user.id,
    emojiUnicode: emojiData.emojiUnicode,
    emoji: emojiData.emoji,
  })
}
