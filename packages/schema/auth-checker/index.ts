import { AuthChecker } from 'type-graphql'

import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'
import { ActerConnectionRole } from '@acter/schema'

const { ADMIN } = ActerConnectionRole

export const authChecker: AuthChecker<
  ActerGraphQLContext,
  ActerConnectionRole
> = async ({ context: { session, prisma }, args }, roles) => {
  // Check session user
  if (!session?.user) {
    console.error('No session user found')
    return false
  }

  // Check invalid roles
  if (roles?.length !== 0 && !roles.includes(ADMIN)) {
    console.error('Invalid role.')
    return false
  }

  // Check ADMIN access
  if (roles.includes(ADMIN)) {
    const { user } = session

    if (!args?.acterId) {
      console.error('Missing acter id on which user has admin role.')
      return false
    }

    const isAdmin = await prisma.acterConnection.findFirst({
      where: {
        followerActerId: user.Acter.id,
        followingActerId: args.acterId,
        role: ADMIN,
      },
    })

    if (!isAdmin) {
      console.error('Not authorized')
      return false
    }
  }

  // Grant access
  return true
}
