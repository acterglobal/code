import { getCanActersJoin } from '@acter/lib/acter/get-can-acters-join'
import { MemberType } from '@acter/lib/constants'
import { Acter } from '@acter/schema'

const { ACTERS, PEOPLE } = MemberType

/**
 * @param acter Acter we wish to check if other Acters can join
 * @returns a list of the member types that this Acter has
 */

export const getActerJoinSelectors = (acter: Acter): MemberType[] => {
  const isActersCanJoin = getCanActersJoin(acter)
  const selectors = [PEOPLE]

  isActersCanJoin && selectors.push(ACTERS)

  return selectors
}
