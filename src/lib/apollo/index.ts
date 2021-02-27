/* istanbul ignore file */
// Adapted from https://www.apollographql.com/blog/building-a-next-js-app-with-apollo-client-slash-graphql/

import { useMemo } from 'react'
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'

let apolloClient: ApolloClient<InMemoryCache | NormalizedCacheObject>

export const createApolloClient = (): ApolloClient<
  InMemoryCache | NormalizedCacheObject
> => {
  const ssrMode = typeof window === 'undefined'
  const link = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  })

  console.log(
    'Setting up GraphQL client with: ',
    process.env.NEXT_PUBLIC_GRAPHQL_URL
  )
  return new ApolloClient({
    cache: new InMemoryCache(),
    ssrMode,
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    link,
  })
}

export function initializeApollo(
  initialState = null
): ApolloClient<InMemoryCache | NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

export function useApollo(
  initialState: InMemoryCache | NormalizedCacheObject
): ApolloClient<InMemoryCache | NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
