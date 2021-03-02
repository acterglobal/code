import { InterestType } from '@generated/type-graphql'

/**
 * Get all interests by Top level types (Focus,Approach,Tags)
 *
 */

export const getTopLevelTypes = (
  interestTypes: InterestType[]
): InterestType[] => {
  const rootType = interestTypes.find((type) => type.name === 'root')
  const topLevelTypes = interestTypes.filter(
    (type) => type.parentInterestTypeId === rootType.id
  )
  return topLevelTypes
}
