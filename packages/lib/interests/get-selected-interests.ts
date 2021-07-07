import { Interest, InterestType } from '@acter/schema/types'

/**
 * Used to group selected interests by InterestTypes
 * @param interestTypes All Interests grouped by InterestType
 * @param selected list of selected interests
 * @returns list of selected interests grouped by InterestType
 */
export const getSelectedInterests = (
  interestTypes: InterestType[],
  selected: Interest[]
): InterestType[] => {
  if (selected?.length) {
    const selectedMap = selected.reduce(
      (prev, { id }) => ({ ...prev, [id]: true }),
      {}
    )
    return interestTypes.map((type) => {
      return {
        ...type,
        Interests: type.Interests.filter(
          ({ id }) => typeof selectedMap[id] !== 'undefined'
        ),
      }
    })
  }

  return []
}
