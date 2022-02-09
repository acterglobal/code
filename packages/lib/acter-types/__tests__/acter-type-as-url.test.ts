import { acterTypeAsUrl } from '@acter/lib/acter-types/acter-type-as-url'
import { UserActerType } from '@acter/lib/fixtures'

describe('acterTypeAsUrl', () => {
  it('should convert an ActerType name to pluralized lower-case', () => {
    expect(acterTypeAsUrl(UserActerType)).toBe('users')
  })
})
