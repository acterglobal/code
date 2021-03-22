import { Interest, InterestType } from '@schema'

export const getSelectedInterests = (
  interestTypes: InterestType[],
  selected: Interest[]
): InterestType[] => {
  if (selected?.length) {
    const selectedMap = selected.reduce(
      (prev, { id }) => ({ ...prev, [id]: true }),
      {}
    )
    return interestTypes.map((type) => {
      return {
        ...type,
        Interests: type.Interests.filter(
          ({ id }) => typeof selectedMap[id] !== 'undefined'
        ),
      }
    })
  }

  return interestTypes
}
