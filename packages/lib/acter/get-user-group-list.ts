import { Acter, ActerPrivacySettings, User } from '@acter/schema'

/**
 * Get a list of the user's valid groups
 * @param user User for which we will get groups for
 * @param groups list of groups of the current acter
 * @returns A list of groups
 */
export const getUserGroupList = (groups: Acter[], user: User): Acter[] => {
  const activeGroups = groups?.filter((group) => group.deletedAt === null)

  const publicActiveGroups = activeGroups?.filter((group) =>
    [ActerPrivacySettings.PUBLIC].includes(
      group.acterPrivacySetting as ActerPrivacySettings
    )
  )

  const privateActiveGroups = activeGroups?.filter((group) => {
    const userGroups = user.Acter.Following.filter(
      (follow) => follow.Following.id === group.id
    )
    return (
      userGroups.length !== 0 &&
      [ActerPrivacySettings.PRIVATE].includes(
        group.acterPrivacySetting as ActerPrivacySettings
      )
    )
  })

  const groupList = [...publicActiveGroups, ...privateActiveGroups]

  return groupList
}
