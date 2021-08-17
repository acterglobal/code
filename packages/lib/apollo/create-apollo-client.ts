import {
  ApolloClient,
  HttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { typePolicies } from './type-policies'

export const createApolloClient = (
  uri: string
): ApolloClient<InMemoryCache | NormalizedCacheObject> => {
  const ssrMode = typeof window === 'undefined'
  const httpLink = new HttpLink({ uri })

  const errorLink = onError(({ networkError }) => {
    //@ts-ignore
    if (networkError?.result?.errors) {
      console.error('Apollo GraphQL validation errors:')
      //@ts-ignore
      console.error(networkError.result.errors)
    }
  })

  return new ApolloClient({
    cache: new InMemoryCache({ typePolicies }),
    ssrMode,
    link: from([errorLink, httpLink]),
  })
}
