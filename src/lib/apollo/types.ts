import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

export type ApolloClientType = ApolloClient<
  InMemoryCache | NormalizedCacheObject
>
