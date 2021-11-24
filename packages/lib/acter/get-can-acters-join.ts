import { Acter, ActerWhoCanJoinSettings } from '@acter/schema'

/**
 * @param acter Acter we wish to check if other Acters can join
 * @returns True or False if other Acters can join this Acter
 */

export const getCanActersJoin = (acter: Acter): boolean => {
  if (acter.acterWhoCanJoinSetting === ActerWhoCanJoinSettings.ACTERS) {
    return true
  }
  return false
}
