import { getTopLevelTypes } from '@acter/lib/interests'
import { Interest, InterestType } from '@acter/schema'

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
