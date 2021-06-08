import { Interest, InterestType } from '@schema'

export const getSelectedTopLevelTypes = (
  topLevelTypes: InterestType[],
  selected: Interest[]
): InterestType[] => {
  const selectedTopLevel = []
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
