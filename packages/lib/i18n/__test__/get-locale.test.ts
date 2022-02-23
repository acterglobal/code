import { getLocale } from '@acter/lib/i18n/get-locale'

describe('getLocale', () => {
  it('convert en_Uk to en-Uk', () => {
    expect(getLocale('en_UK')).toBe('en-UK')
  })
})
