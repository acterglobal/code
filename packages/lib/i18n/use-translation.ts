import { TranslationQuery } from 'next-translate'
import useI18nTranslation from 'next-translate/useTranslation'

import { getTranslationKey } from '@acter/lib/i18n/get-translation-keys'

type HandleTranslationMethod = (
  i18nKey: string | TemplateStringsArray,
  query?: TranslationQuery | null,
  options?: {
    returnObjects?: boolean
    fallback?: string | string[]
    default?: string
  }
) => string

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
    const key = getTranslationKey(i18nKey as string)
    const translationText = t(key, query, { ...options })

    return translationText
  }

  return { t: handleTranslation, lang }
}
