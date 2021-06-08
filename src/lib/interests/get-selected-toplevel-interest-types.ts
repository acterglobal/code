import { Interest, InterestType } from '@schema'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getSelectedTopLevelTypes = (
  topLevelTypes: InterestType[],
  selected: Interest[]
) => {
  const selectedTopLevel = []
  topLevelTypes.map((type) => {
    selected.map((select) => {
      type.name === select.InterestType.name ||
      type.id === select.InterestType.parentInterestTypeId
        ? selectedTopLevel.includes(type)
          ? null
          : selectedTopLevel.push(type)
        : null
    })
  })

  return selectedTopLevel
}
