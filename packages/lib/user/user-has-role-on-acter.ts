import { followerHasRoleOnActer } from '@acter/lib/acter/follower-has-role-on-acter'
import { Acter, ActerConnectionRole, User } from '@acter/schema/types'

/**
 * Wrapper for followerHasRoleOnActer specific to users which handles the case when a user is not logged in
 * @param user User for which we are checking roles
 * @param role Minimum role required
 * @param acter Acter on which we are checking roles
 * @returns true if follower has roles, false if not
 */
export const userHasRoleOnActer = (
  user: Partial<User> | undefined,
  role: ActerConnectionRole,
  acter: Partial<Acter>
): boolean => {
  if (!user?.Acter) return false
  if (user.Acter.id === acter.id) return true

  return followerHasRoleOnActer(user.Acter, role, acter)
}
