import { Acter, ActerWhoCanJoinSettings } from '@acter/schema'

/**
 * @param acter Acter we wish to check if organisations can join
 * @returns True or False if organisations can join Acter
 */

export const getIsOrganisationsCanJoin = (acter: Acter): boolean => {
  if (acter.acterWhoCanJoinSetting === ActerWhoCanJoinSettings.ACTERS) {
    return true
  }
  return false
}
