import React, { FC } from 'react'

import { devtoolsExchange } from '@urql/devtools'
import { cacheExchange } from '@urql/exchange-graphcache'

import { prismaPagination } from './prisma-pagination'
import { createClient, dedupExchange, fetchExchange, Provider } from 'urql'

import { createLink } from '@acter/lib/urql/updates/create-link'

const cache = cacheExchange({
  resolvers: {
    Query: {
      acters: prismaPagination(),
    },
  },
  updates: {
    Mutation: {
      createLink,
    },
  },
})

export const urqlClient = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  exchanges: [dedupExchange, cache, devtoolsExchange, fetchExchange],
})

export const UrqlProvider: FC = ({ children }) => (
  <Provider value={urqlClient}>{children}</Provider>
)
