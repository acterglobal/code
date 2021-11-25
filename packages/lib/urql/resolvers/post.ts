import { Resolver, NullArray } from '@urql/exchange-graphcache'

import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'
import { ResolverMap } from '@acter/lib/urql/resolvers'
import { parseDateField } from '@acter/lib/urql/util/parse-date-field'
import { Post } from '@acter/schema'

type PostInput = {
  createdAt: string
  updatedAt: string
  Comments: PostInput[]
}

type PostOutput = Pick<Post, 'createdAt' | 'updatedAt'> & {
  Comments: PostOutput[]
}

type PostList = { posts: NullArray<PostInput> }

export const postResolvers: ResolverMap = {
  createdAt: parseDateField,
  updatedAt: parseDateField,
}

const setPostDates = (post: PostInput): PostOutput => ({
  ...post,
  createdAt: parseDateOrString(post.createdAt),
  updatedAt: parseDateOrString(post.createdAt),
  Comments: post.Comments?.map?.(setPostDates),
})

export const postListResolver: Resolver<PostList> = (parent) =>
  parent?.posts && typeof parent.posts.length === 'number'
    ? parent.posts.map(setPostDates)
    : undefined
