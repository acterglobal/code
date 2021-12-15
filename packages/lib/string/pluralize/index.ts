import pluralizeLib from 'pluralize'

const specialPluralizeMap = {
  NGO: 'NGOs',
}

export const pluralize = (input: string): string => {
  if (!input) return ''

  const specialPluralize = specialPluralizeMap[input]
  return specialPluralize ? specialPluralize : pluralizeLib.plural(input)
}
