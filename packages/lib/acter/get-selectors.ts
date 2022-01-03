import { mapFollowersByType } from '@acter/lib/acter/map-followers-by-type'
import { MemberType } from '@acter/lib/constants'
import { Acter } from '@acter/schema'

const { PEOPLE, ACTERS } = MemberType

/**
 *
 * @param acter current acter
 * @returns Selectors titles PEOPLE and/or ACTERS depending on the acter follower types
 */

export const getSelectors = (acter: Acter): MemberType[] => {
  const allFollowers = mapFollowersByType(acter)

  const selectors = allFollowers[ACTERS] ? [PEOPLE, ACTERS] : [PEOPLE]

  return selectors
}
