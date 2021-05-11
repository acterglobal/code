import { interestTypeMap } from 'src/lib/interests/map-interest-type'
import { Interests } from 'src/__fixtures__/interest/interests'

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
