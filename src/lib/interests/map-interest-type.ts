import { InterestType } from '@schema'

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
