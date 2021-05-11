import { getSelectedTypes } from 'src/lib/interests/get-selected-types'
import { Interests } from 'src/__fixtures__/interest/interests'

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

  it('should reutrn the types of selected interests', () => {
    const types = getSelectedTypes(selectedInterestIds, allInterests)

    expect(types).toHaveLength(4)

    expect(types[0]).toBe('Environment')
    expect(types[1]).toBe('Focus')
    expect(types[2]).toBe('Social')
    expect(types[3]).toBe('Tags')
  })
})
