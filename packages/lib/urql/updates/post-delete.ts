import { Data, UpdateResolver } from '@urql/exchange-graphcache'

import { WithTypeName } from '../types'

import {
  forEachQueryFields,
  removeItemFn,
} from '@acter/lib/urql/util/query-fields-for-each'
import { Post } from '@acter/schema'

type PostWithType = WithTypeName<Post>

interface PostData {
  deleteOnePost?: PostWithType
}

export const deleteOnePost: UpdateResolver<PostData> = (
  result,
  _args,
  cache,
  _info
) => {
  forEachQueryFields({
    cache,
    result: result.deleteOnePost,
    fieldNameMatch: 'posts',
    fn: removeItemFn<Post>({ cache, result: result.deleteOnePost }),
  })
  cache.invalidate((result.deleteOnePost as unknown) as Data)
}
