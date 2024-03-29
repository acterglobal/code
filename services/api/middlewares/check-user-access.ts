import { MiddlewareFn } from 'type-graphql'

import {
  NotAuthorizedError,
  NotLoggedError,
} from '@acter/lib/errors/graphql-errors'
import type ActerGraphQLContext from '@acter/lib/types/graphql-api'
import { ActerConnectionRole } from '@acter/schema'
import { ActerPrivacySettings } from '@acter/schema'

export const CheckUserAccess: MiddlewareFn<ActerGraphQLContext> = async (
  { context },
  next
) => {
  const acter = await next()
  const user = context.session?.user

  if (acter?.acterPrivacySetting === ActerPrivacySettings.PRIVATE) {
    if (!user) {
      throw NotLoggedError
    }
    const hasRole = await context.prisma.acterConnection.findFirst({
      where: {
        followerActerId: user.Acter.id,
        followingActerId: acter.id,
        role: {
          in: [ActerConnectionRole.MEMBER, ActerConnectionRole.ADMIN],
        },
      },
    })

    if (!hasRole) {
      throw NotAuthorizedError
    }

    return acter
  }

  return acter
}
