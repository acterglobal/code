import { initUrqlClient } from 'next-urql'

import { devtoolsExchange } from '@urql/devtools'
import { cacheExchange, ResolverConfig } from '@urql/exchange-graphcache'

import {
  Client,
  ClientOptions,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql'

import { prismaPagination } from '@acter/lib/urql/prisma-pagination'
// import { resolvers, queryResolvers } from '@acter/lib/urql/resolvers'
// import { acterActivityResolver } from '@acter/lib/urql/resolvers/activity'
import * as updates from '@acter/lib/urql/updates'

export * from './use-notification-mutation'
export * from './provider'

export type Resolvers = ResolverConfig & {
  Query: ResolverConfig
}

export const getUrqlClientOptions = (): ClientOptions => {
  const cache = cacheExchange({
    resolvers: {
      // ...resolvers,
      Query: {
        // ...queryResolvers,
        acters: prismaPagination(),
        // findFirstActer: acterActivityResolver,
      },
    },
    updates: {
      Mutation: updates,
    },
  })

  const isServerSide = typeof window === 'undefined'

  // The `ssrExchange` must be initialized with `isClient` and `initialState`
  const ssr = ssrExchange({
    isClient: !isServerSide,
    initialState: !isServerSide ? window['__URQL_DATA__'] : undefined,
  })

  const config = {
    url: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    exchanges: [dedupExchange, cache, devtoolsExchange, ssr, fetchExchange],
    suspense: false,
  }
  return config
}

export const getUrqlClient = (): Client =>
  initUrqlClient(getUrqlClientOptions(), false)
