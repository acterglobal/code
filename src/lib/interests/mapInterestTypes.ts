import { InterestType } from '@schema'

// eslint-disable-next-line
export const interestTypeMap = (allInterests: InterestType[]) => {
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
