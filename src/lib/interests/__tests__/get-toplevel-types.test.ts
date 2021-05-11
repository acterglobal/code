import { getTopLevelTypes } from 'src/lib/interests/get-toplevel-types'
import { Interests } from 'src/__fixtures__/interest/interests'

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
