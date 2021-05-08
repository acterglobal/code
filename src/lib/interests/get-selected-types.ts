import { interestTypeMap } from 'src/lib/interests/interest-mappings'
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
