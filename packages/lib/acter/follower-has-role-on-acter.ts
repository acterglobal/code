import { connectionHasAtLeastRole } from '@acter/lib/acter/connection-has-at-least-role'
import { Acter, ActerConnectionRole } from '@acter/schema'

/**
 * Determine if a given follower has at least the role given for an acter
 * @param follower Acter for which we are checking roles
 * @param role Minimum role required
 * @param acter Acter on which we are checking roles
 * @returns true if follower has roles, false if not
 */
export const followerHasRoleOnActer = (
  follower: Acter,
  role: ActerConnectionRole,
  acter: Partial<Acter>
): boolean => {
  const connection = acter.Followers?.find(
    ({ Follower }) => follower.id === Follower.id
  )

  if (!connection) return false

  return connectionHasAtLeastRole(connection, role)
}
