import { getActersCanJoin } from '@acter/lib/acter/get-acters-can-join'
import { MemberType } from '@acter/lib/constants'
import { Acter, ActerWhoCanJoinSettings } from '@acter/schema'

const { ACTERS, PEOPLE } = MemberType

/**
 * @param acter Acter we wish to check if other Acters can join
 * @returns a list of the member types that this Acter has
 */

export const getActerJoinSelectors = (acter: Acter): MemberType[] => {
  const actersCanJoin = getActersCanJoin(acter)
  const selectors = [ACTERS]

  if (actersCanJoin !== ActerWhoCanJoinSettings.ALL) {
    actersCanJoin == ActerWhoCanJoinSettings.PEOPLE &&
      (selectors.shift(), selectors.push(PEOPLE))
    return selectors
  }
  selectors.unshift(PEOPLE)
  return selectors
}
