import { getTopLevelTypes } from 'src/lib/interests/get-toplevel-types'
import { Interest, InterestType } from '@schema'

export const getSelectedTopLevelTypes = (
  typesWithSelectedInterests: InterestType[],
  selected: Interest[]
): InterestType[] => {
  const topLevelTypes = getTopLevelTypes(typesWithSelectedInterests)
  const topLevelTypeIds = topLevelTypes.map(({ id }) => id)

  const selectedTopLevelTypeMap = selected.reduce<Record<string, InterestType>>(
    (prev, { InterestType: type }) => {
      if (
        topLevelTypeIds[type.id] ||
        topLevelTypeIds[type.parentInterestTypeId]
      ) {
        return {
          ...prev,
          [type.id]: type,
        }
      }
      return prev
    },
    {}
  )

  return Object.values(selectedTopLevelTypeMap)
}
