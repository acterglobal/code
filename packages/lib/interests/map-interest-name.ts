import { InterestType } from '@acter/schema/types'

/**
 * To get list of all interest names with their ids
 * @param allInterests All Interests grouped by InterestType
 * @returns an object with interest ids as keys and names as values
 */
export const interestNameMap = (
  allInterests: InterestType[]
): Record<string, string> => {
  return allInterests.reduce((map, type) => {
    return {
      ...map,
      ...type.Interests?.reduce((interestMap, interest) => {
        return {
          ...interestMap,
          [interest.id]: interest.name,
        }
      }, {}),
    }
  }, {})
}
