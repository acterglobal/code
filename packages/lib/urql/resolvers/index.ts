import { Resolver } from '@urql/exchange-graphcache'

import { activityResolvers, activityListResolver } from './activity'
import { postResolvers, postListResolver } from './post'

export type ResolverMap = {
  [fieldName: string]: Resolver
}

export const resolvers: ResolverMap = {
  ...activityResolvers,
  ...postResolvers,
}

export const queryResolvers: ResolverMap = {
  activities: activityListResolver,
  posts: postListResolver,
}
