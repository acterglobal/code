import { UpdateResolver } from '@urql/exchange-graphcache'

import { Post } from '@acter/schema'
import POST_FRAGMENT from '@acter/schema/fragments/post-full.graphql'

import { WithTypeName } from '../types'
import {
  forEachQueryFields,
  matchOnActerId,
  prependItemFn,
} from '../util/query-fields-for-each'

type PostWithType = WithTypeName<Post>

interface PostData {
  createOnePost?: PostWithType
}

export const createOnePost: UpdateResolver<PostData> = (
  result,
  _args,
  cache,
  _info
) => {
  if (result.createOnePost?.parentId) {
    const data = cache.readFragment<PostWithType>(POST_FRAGMENT, {
      id: result.createOnePost.parentId,
      __typename: 'Post',
    })
    cache.writeFragment(POST_FRAGMENT, {
      ...data,
      Comments: [...data.Comments, result.createOnePost],
    })
  } else {
    forEachQueryFields({
      cache,
      result: result.createOnePost,
      fieldNameMatch: 'posts',
      match: matchOnActerId,
      fn: prependItemFn({ cache, result: result.createOnePost }),
    })
  }
}
