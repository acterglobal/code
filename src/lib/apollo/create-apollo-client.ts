import {
  ApolloClient,
  HttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

export const createApolloClient = (
  uri: string
): ApolloClient<InMemoryCache | NormalizedCacheObject> => {
  const ssrMode = typeof window === 'undefined'
  const httpLink = new HttpLink({
    uri,
  })
  const errorLink = onError(({ networkError }) => {
    if (networkError) {
      console.error(networkError.result.errors)
    }
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    ssrMode,
    link: from([errorLink, httpLink]),
  })
}
