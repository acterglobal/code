import { getTranslationKey } from '@acter/lib/i18n/getTranslationKeys'

describe('getTranslationKey', () => {
  it('shout return correct translation key for the given string', () => {
    expect(getTranslationKey('NGO')).toBe('NGO')

    expect(getTranslationKey('Public organisation')).toBe('publicOrganisation')

    expect(getTranslationKey('acterForm.UploadImage')).toBe(
      'acterForm.uploadImage'
    )

    expect(getTranslationKey('nested.nested.TranslationKey')).toBe(
      'nested.nested.translationKey'
    )
    expect(getTranslationKey('nested.nested.NGO')).toBe('nested.nested.NGO')
  })
})
