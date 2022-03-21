export const getLocale = (string: string): string =>
  string?.replace('_', '-') || ''
