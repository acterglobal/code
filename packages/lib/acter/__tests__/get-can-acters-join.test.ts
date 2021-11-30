import { getActersCanJoin } from '@acter/lib/acter/get-acters-can-join'
import { Acter, ActerWhoCanJoinSettings } from '@acter/schema'
import { ExampleActer } from '@acter/schema/fixtures'

const { ALL, ACTERS, PEOPLE } = ActerWhoCanJoinSettings

describe('getCanActersJoin', () => {
  it('should return ALL if acterCanJoinSetting is set to ALL', () => {
    const acter: Acter = {
      ...ExampleActer,
      acterWhoCanJoinSetting: ActerWhoCanJoinSettings.ALL,
    }
    expect(getActersCanJoin(acter)).toBe(ALL)
  })

  it('should ACTERS if acterCanJoinSetting is set to ACTERS', () => {
    const acter: Acter = {
      ...ExampleActer,
      acterWhoCanJoinSetting: ActerWhoCanJoinSettings.ACTERS,
    }
    expect(getActersCanJoin(acter)).toBe(ACTERS)
  })

  it('should PEOPLE if acterCanJoinSetting is set to PEOPLE', () => {
    const acter: Acter = {
      ...ExampleActer,
      acterWhoCanJoinSetting: ActerWhoCanJoinSettings.PEOPLE,
    }
    expect(getActersCanJoin(acter)).toBe(PEOPLE)
  })
})
