import { da, enGB } from 'date-fns/locale'

const localeMap = {
  en_GB: enGB,
  da_DK: da,
}

/**
 * Give date-fns locale by given locale
 * @param locale current locale
 * @returns date-fns locale
 */
export const getDateTimeLocale = (locale: string): Locale =>
  localeMap[locale.replace('-', '_')]
