import { ActerConnectionRole } from '.prisma/client'
import { equals } from 'fp-ts/lib/Ord'
import { MiddlewareFn } from 'type-graphql'

import { ActerGraphQLContext } from '@acter/lib/types/graphql-api'
import { ActerPrivacySettings } from '@acter/schema'

export const CheckUserAccess: MiddlewareFn<ActerGraphQLContext> = async (
  { context },
  next
) => {
  const acter = await next()
  const user = context.session.user

  if (acter.acterPrivacySetting === ActerPrivacySettings.PRIVATE) {
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
      console.error('ERROR: User not authorized')
      throw 'User not authorized. Please try again'
    }

    return acter
  }

  return acter
}
