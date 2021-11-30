import { Acter, ActerWhoCanJoinSettings } from '@acter/schema'

/**
 * @param acter Acter we wish to check if other Acters can join
 * @returns True or False if other Acters can join this Acter
 */

const { ALL, ACTERS } = ActerWhoCanJoinSettings

export const getCanActersJoin = (acter: Acter): boolean => {
  return [ALL, ACTERS].includes(
    acter.acterWhoCanJoinSetting as ActerWhoCanJoinSettings
  )
}
