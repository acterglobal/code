import { MentionData } from '@draft-js-plugins/mention'

import { ActerConnection } from '@acter/schema'

export const getPostMentionsSuggestions = (
  followers: ActerConnection[]
): MentionData[] => {
  if (!followers || followers.length === 0) return []

  const mentions = followers.map(({ Follower }) => ({
    name: Follower.name,
    acterId: Follower.id,
  }))

  return mentions
}
