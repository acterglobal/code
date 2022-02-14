/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  UseTranslationResponse,
  UseTranslationOptions,
  TFunction,
} from 'react-i18next'

import { useTranslation as useI18nTranslation } from 'next-i18next'

import { getTranslationKey } from '@acter/lib/i18n/get-translation-keys'

export const useTranslation = (
  ns?: string | string[],
  options?: UseTranslationOptions<any>
): UseTranslationResponse<string | string[], any> => {
  const { t, ...rest } = useI18nTranslation(ns, options)

  const handleTranslation: TFunction = (i18nKey, options): string => {
    const key = getTranslationKey(i18nKey as string)
    const translationText = t(key, options)

    return translationText
  }

  return { t: handleTranslation, ...rest }
}
