import { NullArray, UpdateResolver } from '@urql/exchange-graphcache'

import { Post } from '@acter/schema'
import POST_FRAGMENT from '@acter/schema/fragments/post-full.graphql'
import GET_POSTS from '@acter/schema/queries/posts-by-acter.graphql'

import { WithTypeName, WithWhereActerId } from '../types'
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
    // forEachQueryFields({
    //   cache,
    //   result: result.createPost,
    //   fieldNameMatch: 'posts',
    //   match: matchOnActerId,
    //   fn: ({ fieldKey, fieldArgs, items }) => {
    //     debugger
    //   },
    // })
    const data = cache.readFragment<PostWithType>(POST_FRAGMENT, {
      id: result.createPost.parentId,
      __typename: 'Post',
    })
    cache.writeFragment(POST_FRAGMENT, {
      ...data,
      Comments: [result.createPost, ...data.Comments],
    })
  }

  forEachQueryFields({
    cache,
    result: result.createPost,
    fieldNameMatch: 'posts',
    match: matchOnActerId,
    fn: prependItemFn({ cache, result: result.createPost }),
  })
}
