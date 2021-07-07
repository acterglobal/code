import { InterestType } from '@acter/schema/types'

/**
 *  To get list of all interest types with their ids
 * @param allInterests All Interests grouped by InterestType
 * @returns an object with interest ids as keys and interestTypes as values
 */
export const interestTypeMap = (
  allInterests: InterestType[]
): Record<string, string> => {
  return allInterests.reduce((map, type) => {
    return {
      ...map,
      ...type.Interests?.reduce((interestMap, interest) => {
        return {
          ...interestMap,
          [interest.id]: type.name,
        }
      }, {}),
    }
  }, {})
}
