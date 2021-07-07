import { Interest, InterestType } from '@schema'
import { getTopLevelTypes } from '@acter/lib/interests'

export const getSelectedTopLevelTypes = (
  typesWithSelectedInterests: InterestType[],
  selected: Interest[]
): InterestType[] => {
  const selectedTopLevel = []
  const topLevelTypes = getTopLevelTypes(typesWithSelectedInterests)
  topLevelTypes.map((type) => {
    selected.map((select) => {
      type.id === select.InterestType.id ||
      type.id === select.InterestType.parentInterestTypeId
        ? selectedTopLevel.includes(type)
          ? null
          : selectedTopLevel.push(type)
        : null
    })
  })

  return selectedTopLevel
}
