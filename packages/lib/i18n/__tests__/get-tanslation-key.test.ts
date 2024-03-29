import { getTranslationKey } from '@acter/lib/i18n/get-translation-keys'

describe('getTranslationKey', () => {
  it('shout return correct translation key for the given string', () => {
    expect(getTranslationKey('NGO')).toBe('NGO')

    expect(getTranslationKey('Public organisation')).toBe('publicOrganisation')

    expect(getTranslationKey('form.UploadImage')).toBe('form.uploadImage')

    expect(getTranslationKey('nested.nested.TranslationKey')).toBe(
      'nested.nested.translationKey'
    )

    expect(getTranslationKey('nested.nested.NGO')).toBe('nested.nested.NGO')

    expect(getTranslationKey('namespace:translation key')).toBe(
      'namespace:translationKey'
    )

    expect(getTranslationKey('namespace:nestedKey.translation key')).toBe(
      'namespace:nestedKey.translationKey'
    )
  })
})
