import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { ExampleActer } from '@acter/schema/fixtures'

describe('acterTypeAsUrl', () => {
  it('should throw an error if no ActerType name is provided', () => {
    expect(() =>
      acterAsUrl({
        acter: {
          ...ExampleActer,
          ActerType: null,
        },
      })
    ).toThrow()
  })

  it('should convert an ActerType name to pluralized lower-case', () => {
    expect(acterAsUrl({ acter: ExampleActer })).toBe(
      '/organisations/my-organisation'
    )
  })

  it('should add any additional path as provided', () => {
    expect(
      acterAsUrl({ acter: ExampleActer, extraPath: ['some', 'extra', 'path'] })
    ).toBe('/organisations/my-organisation/some/extra/path')
    expect(
      acterAsUrl({ acter: ExampleActer, extraPath: 'some/extra/path' })
    ).toBe('/organisations/my-organisation/some/extra/path')
  })

  it('should include the Base URL if requested', () => {
    process.env.NEXT_PUBLIC_BASE_URL = 'http://example.com'
    expect(acterAsUrl({ acter: ExampleActer, includeBaseUrl: true })).toBe(
      'http://example.com/organisations/my-organisation'
    )
  })

  it('should include a query string if requested', () => {
    expect(
      acterAsUrl({ acter: ExampleActer, query: { foo: 'bar', blah: 'baz' } })
    ).toBe('/organisations/my-organisation?foo=bar&blah=baz')
  })
})
