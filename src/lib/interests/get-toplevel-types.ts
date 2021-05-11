import { InterestType } from '@schema'

/**
 * Use to get top level type of interests
 * @param interestTypes All Interests grouped by InterestType
 * @returns list of top level type interests
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
