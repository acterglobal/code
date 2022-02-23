import { Language } from '@acter/schema'

export const getLocale = (language: string): string =>
  language?.replace('_', '-') as Language
