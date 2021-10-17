import { NullArray, UpdateResolver } from '@urql/exchange-graphcache'

import { WithTypeName } from '../types'
import { forEachQueryFields } from '../util/query-fields-for-each'

import { Post } from '@acter/schema'

import POST_FRAGMENT from '@acter/schema/fragments/post-full.graphql'

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
  if (result.createPost.parentId) {
    const data = cache.readFragment<PostWithType>(POST_FRAGMENT, {id: result.createPost.parentId, __typename: 'Post'})
    cache.writeFragment(POST_FRAGMENT,
      {
      ...data,
      Comments: [
        ...data.Comments,
        result.createPost
      ]
    })
    return 
  }

  forEachQueryFields({
    cache,
    result: result.createPost,
    fieldNameMatch: 'posts',
    fn: ({ fieldKey, items }) => {
      items.unshift(result.createPost)
      cache.link('Query', fieldKey, <NullArray<string>>items)
    },
  })
}
