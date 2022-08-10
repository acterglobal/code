import { AuthChecker } from 'type-graphql'

import { getLogger } from '@acter/lib/logger'
import type ActerGraphQLContext from '@acter/lib/types/graphql-api'
import { ActerConnectionRole } from '@acter/schema'

const { ADMIN } = ActerConnectionRole

const l = getLogger('authChecker')

export const authChecker: AuthChecker<
  ActerGraphQLContext,
  ActerConnectionRole
> = async ({ context: { session, prisma }, args }, roles) => {
  // Check session user
  if (!session?.user) {
    l.error('No session user found')
    return false
  }

  // Check invalid roles
  if (roles?.length !== 0 && !roles.includes(ADMIN)) {
    l.error('Invalid role.')
    return false
  }

  // Check ADMIN access
  if (roles.includes(ADMIN)) {
    const { user } = session

    if (!args?.acterId) {
      l.error('Missing acter id on which user has admin role.')
      return false
    }

    const isAdmin = await prisma.acterConnection.findFirst({
      where: {
        followerActerId: user.Acter.id,
        followingActerId: args.acterId,
        role: ADMIN,
      },
    })

    if (!isAdmin && user.Acter.id !== args?.acterId) {
      l.error('Not authorized')
      return false
    }
  }

  // Grant access
  return true
}
