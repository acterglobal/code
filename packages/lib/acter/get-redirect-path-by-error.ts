import router from 'next/router'

import {
  NotAuthorizedError,
  NotFoundError,
  NotLoggedError,
} from '../errors/graphql-errors'
import { UseActerError } from './use-acter'
import { GraphQLError } from 'graphql'

export const getRedirectPathByError: (acterError: UseActerError) => void = (
  acterError: UseActerError
) => {
  if (acterError) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { graphQLErrors }: GraphQLError[] | any = acterError
    graphQLErrors?.forEach((err: GraphQLError) => {
      switch (err.message) {
        case NotFoundError.message:
          return router.push({
            pathname: '/404',
            query: router.asPath,
          })
        case NotAuthorizedError.message:
          return router.push({
            pathname: '/403',
            query: router.asPath,
          })
        case NotLoggedError.message:
          return router.push({
            pathname: '/401',
            query: router.asPath,
          })
        default:
          return null
      }
    })
  }
  return null
}
