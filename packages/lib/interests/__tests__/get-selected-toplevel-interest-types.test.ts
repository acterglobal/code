import { getSelectedTopLevelTypes } from '@acter/lib/interests'
import { Interests } from '@acter/schema/fixtures/interest/interests'

const allInterestsTypes = Interests.data.interestTypes
const selectedInterests = [
  allInterestsTypes[1].Interests[0],
  allInterestsTypes[2].Interests[0],
]

describe('getSelectedTopLevelTypes', () => {
  it('should return empty array if no interests types are provided', () => {
    expect(getSelectedTopLevelTypes(allInterestsTypes, [])).toStrictEqual([])
  })

  it.skip('should return top level interests types that match selected', () => {
    const results = getSelectedTopLevelTypes(
      allInterestsTypes,
      selectedInterests
    )
    expect(results).toHaveLength(2)
    expect(results[0].name).toBe('Environment')
    expect(results[1].name).toBe('Focus')
  })
})
