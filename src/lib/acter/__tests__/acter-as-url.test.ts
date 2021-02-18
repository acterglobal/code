import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import { ExampleActer } from 'src/__fixtures__'

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
    expect(acterAsUrl(ExampleActer)).toBe('/organizations/my-organization')
  })
})
