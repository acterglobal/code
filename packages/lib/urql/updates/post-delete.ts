import { Data, UpdateResolver } from '@urql/exchange-graphcache'

import { WithTypeName } from '../types'

import { Post } from '@acter/schema'

type PostWithType = WithTypeName<Post>

interface PostData {
  deletePost?: PostWithType
}

export const deletePost: UpdateResolver<PostData> = (
  result,
  _args,
  cache,
  _info
) => {
  cache.invalidate((result.deletePost as unknown) as Data)
}
