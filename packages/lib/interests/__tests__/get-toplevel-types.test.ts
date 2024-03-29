import { getTopLevelTypes } from '@acter/lib/interests/get-toplevel-types'
import { Interests } from '@acter/schema/fixtures/interest/interests'

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
