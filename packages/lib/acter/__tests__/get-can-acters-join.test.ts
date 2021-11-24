import { getCanActersJoin } from '@acter/lib/acter/get-can-acters-join'
import { Acter, ActerWhoCanJoinSettings } from '@acter/schema'
import { ExampleActer } from '@acter/schema/fixtures'

describe('getCanActersJoin', () => {
  it('should return true when acterWHoCanJoinSetting is set to ACTERS', () => {
    const acter: Acter = {
      ...ExampleActer,
      acterWhoCanJoinSetting: ActerWhoCanJoinSettings.ACTERS,
    }
    expect(getCanActersJoin(acter)).toBe(true)
  })

  it('should return false when acterWHoCanJoinSetting is not set to ACTERS', () => {
    const acter: Acter = {
      ...ExampleActer,
      acterWhoCanJoinSetting: ActerWhoCanJoinSettings.USERS,
    }
    expect(getCanActersJoin(acter)).toBe(false)
  })
})
