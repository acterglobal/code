import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { ExampleActer } from '@acter/schema/fixtures'

describe('acterTypeAsUrl', () => {
  it('should throw an error if no ActerType name is provided', () => {
    expect(() =>
      acterAsUrl({
        ...ExampleActer,
        ActerType: null,
      })
    ).toThrow()
  })

  it('should convert an ActerType name to pluralized lower-case', () => {
    expect(acterAsUrl(ExampleActer)).toBe('/organisations/my-organisation')
  })

  it('should add any additional path as provided', () => {
    expect(acterAsUrl(ExampleActer, 'some', 'extra', 'path')).toBe(
      '/organisations/my-organisation/some/extra/path'
    )
  })
})
