import { interestTypeMap } from '@acter/lib/interests/map-interest-type'
import { InterestType } from '@acter/schema'

/**
 * Used to get InterestType names by providing interest ids
 * @param selectedInterestId list of selected interest ids
 * @param interestTypes All Interests grouped by InterestType
 * @returns list of InterestType names
 */
export const getSelectedTypes = (
  selectedInterestId: string[],
  interestTypes: InterestType[]
): string[] => {
  const types = selectedInterestId.map(
    (interestId) => interestTypeMap(interestTypes)[interestId]
  )
  return types
}
