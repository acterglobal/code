import { ActerConnection, ActerConnectionRole } from '@acter/schema/types'

export const connectionHasAtLeastRole = (
  connection: ActerConnection,
  role: ActerConnectionRole
): boolean => {
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

  return roleMap[role].includes(ActerConnectionRole[connection.role])
}
