import { MiddlewareFn } from 'type-graphql'

import { NotFoundError } from '@acter/lib/errors/graphql-errors'
import ActerGraphQLContext from '@acter/lib/types/graphql-api'

export const CheckActerExists: MiddlewareFn<ActerGraphQLContext> = async (
  _,
  next
) => {
  const acter = await next()

  if (!acter) {
    throw NotFoundError
  }

  return acter
}
