import { MiddlewareFn } from 'type-graphql'

import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'

/* Checks if session or user in session exist */
export const SessionChecker: MiddlewareFn<ActerGraphQLContext> = async (
  { context },
  next
) => {
  if (!context.session) {
    const err = 'No session found'
    console.error(err)
    throw err
  }

  if (!context.session.user) {
    const err = 'No user found'
    console.error(err)
    throw err
  }

  return next()
}
