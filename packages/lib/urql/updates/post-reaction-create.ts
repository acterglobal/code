import { UpdateResolver } from '@urql/exchange-graphcache'

import { addItemToFieldList } from '../util/add-item-to-field-list'

import { WithTypeName } from '@acter/lib/urql/types'
import { PostReaction } from '@acter/schema'

type PostReactionType = WithTypeName<PostReaction>

interface PostReactionData {
  createOnePostReaction?: PostReactionType
}

export const createOnePostReaction: UpdateResolver<PostReactionData> = (
  result,
  _args,
  cache,
  _info
) => {
  addItemToFieldList({
    cache,
    target: {
      __typename: 'Post',
      id: result.createOnePostReaction.postId,
    },
    field: 'PostReactions',
    item: result.createOnePostReaction,
  })
}
