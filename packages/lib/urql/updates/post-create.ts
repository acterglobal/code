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
  createPost?: PostWithType
}

export const createPost: UpdateResolver<PostData> = (
  result,
  _args,
  cache,
  _info
) => {
  if (result.createPost?.parentId) {
    const data = cache.readFragment<PostWithType>(POST_FRAGMENT, {
      id: result.createPost.parentId,
      __typename: 'Post',
    })
    cache.writeFragment(POST_FRAGMENT, {
      ...data,
      Comments: [result.createPost, ...data.Comments],
    })
  } else {
    forEachQueryFields({
      cache,
      result: result.createPost,
      fieldNameMatch: 'posts',
      match: matchOnActerId,
      fn: prependItemFn({ cache, result: result.createPost }),
    })
  }
}
