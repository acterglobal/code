import { interestTypeMap } from 'src/lib/interests/map-interest-type'
import { InterestType } from '@schema'

export const getSelectedTypes = (
  selectedInterestId: string[],
  interestTypes: InterestType[]
): string[] => {
  const types = selectedInterestId.map(
    (interestId) => interestTypeMap(interestTypes)[interestId]
  )
  return types
}
