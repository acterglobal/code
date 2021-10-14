import React, { FC } from 'react'

import { cacheExchange } from '@urql/exchange-graphcache'

import { prismaPagination } from './prisma-pagination'
import { createClient, dedupExchange, fetchExchange, Provider } from 'urql'

const cache = cacheExchange({
  resolvers: {
    Query: {
      acters: prismaPagination(),
    },
  },
})

export const urqlClient = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  exchanges: [dedupExchange, cache, fetchExchange],
})

export const UrqlProvider: FC = ({ children }) => (
  <Provider value={urqlClient}>{children}</Provider>
)
