import { capitalize } from '@acter/lib/string/capitalize'

describe('capitalize', () => {
  it('should return an empty string if a value passed is empty or missing', () => {
    const undef = undefined
    expect(capitalize(undef)).toBe('')
    expect(capitalize('')).toBe('')
  })

  it('should capitalize a passed string', () => {
    expect(capitalize('foo bar')).toBe('Foo bar')
  })

  it('should handle special capitalizations', () => {
    expect(capitalize('ngo')).toBe('NGO')
  })
})
