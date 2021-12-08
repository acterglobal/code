import { Data, UpdateResolver } from '@urql/exchange-graphcache'

import { WithTypeName } from '@acter/lib/urql/types'
import { PostReaction } from '@acter/schema'

type PostReactionData = {
  deletePostReaction: WithTypeName<PostReaction>
}

export const deletePostReaction: UpdateResolver<PostReactionData> = (
  result,
  _args,
  cache,
  _info
) => {
  cache.invalidate((result.deletePostReaction as unknown) as Data)
}
