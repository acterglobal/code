import { getIsOrganisationsCanJoin } from '@acter/lib/acter/get-can-organisations-join'
import { Acter, ActerWhoCanJoinSettings } from '@acter/schema'
import { ExampleActer } from '@acter/schema/fixtures'

describe('getIsOrganisationsCanJoin', () => {
  it('should return true when acterWHoCanJoinSetting is set to ACTERS', () => {
    const acter: Acter = {
      ...ExampleActer,
      acterWhoCanJoinSetting: ActerWhoCanJoinSettings.ACTERS,
    }
    expect(getIsOrganisationsCanJoin(acter)).toBe(true)
  })

  it('should return false when acterWHoCanJoinSetting is not set to ACTERS', () => {
    const acter: Acter = {
      ...ExampleActer,
      acterWhoCanJoinSetting: ActerWhoCanJoinSettings.USERS,
    }
    expect(getIsOrganisationsCanJoin(acter)).toBe(false)
  })
})
