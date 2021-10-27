import { Data, UpdateResolver } from '@urql/exchange-graphcache'

import { WithTypeName } from '../types'

import {
  forEachQueryFields,
  removeItemFn,
} from '@acter/lib/urql/util/query-fields-for-each'
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
  forEachQueryFields({
    cache,
    result: result.deletePost,
    fieldNameMatch: 'links',
    fn: removeItemFn<Post>({ cache, result: result.deletePost }),
  })
  cache.invalidate((result.deletePost as unknown) as Data)
}
