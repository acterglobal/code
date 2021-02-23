import { Interests } from '../../__fixtures__/interest/interests'

/**
 * Get all interests by Top level types (Focus,Approach,Tags)
 *
 */

export const getTopLevelTypes = () => {
  const rootType = Interests.data.interestTypes.find(
    (type) => type.name === 'root'
  )
  const topLevelTypes = Interests.data.interestTypes.filter(
    (type) => type.parentInterestTypeId === rootType.id
  )
  return topLevelTypes
}
