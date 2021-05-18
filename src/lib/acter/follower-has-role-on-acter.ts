import { Acter, ActerConnectionRole } from '@schema'

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
  if (!acter.Followers?.length) {
    return false
  }

  // Map of permissions held by a role
  const roleMap = {
    // Admin can only include Admin
    [ActerConnectionRole.ADMIN]: [ActerConnectionRole.ADMIN],
    // Member can include Admins
    [ActerConnectionRole.MEMBER]: [
      ActerConnectionRole.ADMIN,
      ActerConnectionRole.MEMBER,
    ],
    // Pending includes everything
    [ActerConnectionRole.PENDING]: [
      ActerConnectionRole.ADMIN,
      ActerConnectionRole.MEMBER,
      ActerConnectionRole.PENDING,
    ],
  }

  // All follower Acter.id's and their corresponding role
  const followerCollectionRoleMap = acter.Followers.reduce(
    (prev, connection) => ({
      ...prev,
      [connection.Follower.id]: connection.role,
    }),
    {}
  )

  // See if the permission map includes this Acter's Connection Status
  const followerRole = followerCollectionRoleMap[follower.id]
  if (roleMap[role].includes(followerRole)) return true

  return false
}
