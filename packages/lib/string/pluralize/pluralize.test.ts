import { pluralize } from '@acter/lib/string/pluralize'

describe('pluralize', () => {
  it('should return an empty string on undefined, null, or empty', () => {
    expect(pluralize(undefined)).toBe('')
    expect(pluralize(null)).toBe('')
    expect(pluralize('')).toBe('')
  })

  it('should pluralize a normal word', () => {
    expect(pluralize('foo')).toBe('foos')
    expect(pluralize('bar')).toBe('bars')
  })

  it('should pluralize words that end with y correctly', () => {
    expect(pluralize('university')).toBe('universities')
    expect(pluralize('company')).toBe('companies')
  })

  it('should pluralize special acronyms correctly', () => {
    expect(pluralize('NGO')).toBe('NGOs')
  })
})
