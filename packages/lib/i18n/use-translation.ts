import { TranslationQuery, Translate } from 'next-translate'
import useI18nTranslation from 'next-translate/useTranslation'

type HandleTranslationMethod = (
  i18nKey: string | TemplateStringsArray,
  query?: TranslationQuery | null,
  options?: {
    returnObjects?: boolean
    fallback?: string | string[]
    default?: string
  }
) => string

// type HandleTranslationMethod = Translate

type UseTranslationReturn = {
  t: HandleTranslationMethod
  lang: string
}

export const useTranslation = (
  defaultNameSpace?: string
): UseTranslationReturn => {
  const { t, lang } = useI18nTranslation(defaultNameSpace)

  const handleTranslation = (
    i18nKey: string | TemplateStringsArray,
    query?: TranslationQuery | null,
    options?: {
      returnObjects?: boolean
      fallback?: string | string[]
      default?: string
    }
  ): string => {
    const translationText = t(i18nKey, query, {
      ...options,
      fallback: 'translation missing',
    })
    // TODO: handle if translation is missing
    return translationText
  }

  return { t: handleTranslation, lang }
}
