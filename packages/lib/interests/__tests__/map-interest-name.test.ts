import { interestNameMap } from '@acter/lib/interests/map-interest-name'
import { Interests } from '@acter/schema/fixtures/interest/interests'

const allInterests = Interests.data.interestTypes
const AirInterestId = allInterests[1].Interests[0].id
const CollaborationInterestId = allInterests[3].Interests[0].id

describe('interestNameMap', () => {
  it('should return empty object if no interests are provided', () => {
    expect(interestNameMap([])).toStrictEqual({})
  })

  it('should an object of interest ids as keys and names as values', () => {
    const result = interestNameMap(allInterests)

    expect(result).toHaveProperty(AirInterestId, 'Air')
    expect(result).toHaveProperty(CollaborationInterestId, 'Collaboration')
  })
})
