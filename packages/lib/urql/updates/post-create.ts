import { UpdateResolver } from '@urql/exchange-graphcache'

import { WithTypeName } from '../types'
import {
  forEachQueryFields,
  matchOnActerId,
  prependItemFn,
} from '../util/query-fields-for-each'

import POST_FRAGMENT from '@acter/lib/graphql/fragments/post-full.graphql'
import { Post } from '@acter/schema'

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
      Comments: [...data.Comments, result.createPost],
    })
    return
  }

  forEachQueryFields({
    cache,
    result: result.createPost,
    fieldNameMatch: 'posts',
    match: matchOnActerId,
    fn: prependItemFn({ cache, result: result.createPost }),
  })
}
