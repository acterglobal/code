import { Interests } from '@acter/lib/fixtures/interest/interests'
import { getTopLevelTypes } from '@acter/lib/interests/get-toplevel-types'

describe('getTopLevelTypes', () => {
  it('should return empty array if no interests are provided', () => {
    expect(getTopLevelTypes([])).toStrictEqual([])
  })

  it('should return top level interests types', () => {
    const types = getTopLevelTypes(Interests.data.interestTypes)
    const typeNames = ['Focus', 'Approach', 'Tags']

    types.map((type, i) => expect(type.name).toBe(typeNames[i]))
  })
})
