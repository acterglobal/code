import { Acter, ActerConnectionRole } from '@schema'
import { connectionHasAtLeastRole } from 'src/lib/acter/connection-has-at-least-role'

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
  acter: Acter
): boolean => {
  const connection = acter.Followers?.find(
    ({ Follower }) => follower.id === Follower.id
  )

  if (!connection) return false

  return connectionHasAtLeastRole(connection, role)
}
