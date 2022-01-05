import { Interests } from '@acter/lib/fixtures/interest/interests'
import { interestTypeMap } from '@acter/lib/interests/map-interest-type'

const allInterests = Interests.data.interestTypes
const AirInterestId = allInterests[1].Interests[0].id
const CollaborationInterestId = allInterests[3].Interests[0].id

describe('interestTypeMap', () => {
  it('should return empty object if no interests are provided', () => {
    expect(interestTypeMap([])).toStrictEqual({})
  })

  it('should an object of interest ids as keys and interest types as values', () => {
    const result = interestTypeMap(allInterests)

    expect(result).toHaveProperty(AirInterestId, 'Environment')
    expect(result).toHaveProperty(CollaborationInterestId, 'Approach')
  })
})
