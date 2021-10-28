import { devtoolsExchange } from '@urql/devtools'
import { cacheExchange } from '@urql/exchange-graphcache'

import { prismaPagination } from './prisma-pagination'
import {
  ClientOptions,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql'

import * as updates from '@acter/lib/urql/updates'

export * from './use-notification-mutation'
export * from './use-paginated-query'
export * from './provider'

const cache = cacheExchange({
  resolvers: {
    Query: {
      acters: prismaPagination(),
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

export const urqlClientOptions: ClientOptions = {
  url: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  exchanges: [dedupExchange, cache, devtoolsExchange, ssr, fetchExchange],
  suspense: false,
}

export const urqlClient = createClient(urqlClientOptions)
