import { acterTypeAsUrl } from '@acter/lib/acter-types/acter-type-as-url'
import { UserActerType } from 'src/__fixtures__'

describe('acterTypeAsUrl', () => {
  it('should convert an ActerType name to pluralized lower-case', () => {
    expect(acterTypeAsUrl(UserActerType)).toBe('users')
  })
})
