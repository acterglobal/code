import { InterestTypes } from '@acter/lib/constants'
import { Interests } from '@acter/lib/fixtures/interest/interests'
import { getSelectedTypes } from '@acter/lib/interests/get-selected-types'

const { ENVIRONMENT, FOCUS, SOCIAL, TAGS } = InterestTypes
const allInterests = Interests.data.interestTypes
const selectedInterestIds = [
  allInterests[1].Interests[0].id,
  allInterests[2].Interests[0].id,
  allInterests[4].Interests[0].id,
  allInterests[6].Interests[0].id,
]

describe('getSelectedTypes', () => {
  it('should throw an error if no selected interest ids are provided', () => {
    expect(getSelectedTypes([], Interests.data.interestTypes)).toStrictEqual([])
  })

  it('should return the types of selected interests', () => {
    const types = getSelectedTypes(selectedInterestIds, allInterests)

    expect(types).toHaveLength(4)
    expect(types).toStrictEqual([ENVIRONMENT, FOCUS, SOCIAL, TAGS])
  })
})
