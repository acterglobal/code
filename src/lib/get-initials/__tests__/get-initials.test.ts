import { getInitials } from 'src/lib/get-initials'

describe('getInitials', () => {
  it('should return one initial when only one word exists', () => {
    expect(getInitials('foo')).toBe('f')
  })

  it('should return the first two initials for longer sentences by default', () => {
    expect(getInitials('foo bar baz')).toBe('fb')
  })

  it('should return X initials when extra count parameter is set', () => {
    expect(getInitials('foo bar baz blah', 3)).toBe('fbb')
  })
})
