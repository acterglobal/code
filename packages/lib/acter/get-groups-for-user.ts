import { ActerTypes } from '@acter/lib/constants'
import {
  Acter,
  ActerConnectionRole,
  ActerPrivacySettings,
  User,
} from '@acter/schema'

import { connectionHasAtLeastRole } from './connection-has-at-least-role'

/**
 * Get a list of the user's valid groups
 * @param user User for which we will get groups for
 * @param groups list of groups of the current acter
 * @returns A list of groups
 */
export const getGroupsForUser = (acter: Acter, user: User): Acter[] => {
  const userFollowingMap = user.Acter.Following.reduce((memo, connection) => {
    if (connectionHasAtLeastRole(connection, ActerConnectionRole.MEMBER))
      return { ...memo, [connection.Following.id]: connection }
    return memo
  }, {})

  return (
    acter?.Children?.filter((group) => {
      const isGroup = group.ActerType.name === ActerTypes.GROUP
      const notDeleted = group.deletedAt === null
      const isPublicGroup =
        group.acterPrivacySetting === ActerPrivacySettings.PUBLIC
      const isPrivateGroupMember =
        group.acterPrivacySetting === ActerPrivacySettings.PRIVATE &&
        userFollowingMap[group.id]
      return isGroup && notDeleted && (isPublicGroup || isPrivateGroupMember)
    }) || []
  )
}
