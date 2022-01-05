import { Interests } from '@acter/lib/fixtures/interest/interests'
import { getSelectedInterests } from '@acter/lib/interests/get-selected-interests'

const allInterests = Interests.data.interestTypes
const selectedInterests = [
  allInterests[1].Interests[0],
  allInterests[2].Interests[0],
]

describe('getSelectedInterests', () => {
  it('should return empty array if no selected interests provided', () => {
    expect(getSelectedInterests(allInterests, [])).toStrictEqual([])
  })

  it('should return selected interests grouped by interestType', () => {
    const result = getSelectedInterests(allInterests, selectedInterests)

    expect(result[1].Interests).toHaveLength(1)
    expect(result[1].name).toBe('Environment')
    expect(result[1].Interests[0].name).toBe('Air')

    expect(result[2].Interests).toHaveLength(1)
    expect(result[2].name).toBe('Focus')
    expect(result[2].Interests[0].name).toBe('Partnerships')

    expect(result[3].Interests).toHaveLength(0)
  })
})
