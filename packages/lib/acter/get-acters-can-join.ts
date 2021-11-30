import { Acter, ActerWhoCanJoinSettings } from '@acter/schema'

/**
 * @param acter Acter we wish to check if other Acters can join
 * @returns Returns enum of which Acter setting is allowed to connect ALL, ACTERS or PEOPLE
 */

const { ALL, ACTERS, PEOPLE } = ActerWhoCanJoinSettings

export const getActersCanJoin = (acter: Acter): ActerWhoCanJoinSettings => {
  switch (acter.acterWhoCanJoinSetting) {
    case ALL:
      return ALL
    case ACTERS:
      return ACTERS
    case PEOPLE:
      return PEOPLE
  }
}
