import justCapitalize from 'just-capitalize'

const specialCapitalizationMap = {
  ngo: 'NGO',
}

export const capitalize = (textString: string | unknown): string => {
  if (!textString) {
    return ''
  }

  const specialCapitalization =
    specialCapitalizationMap[(textString as string).toLocaleLowerCase()]
  return specialCapitalization
    ? specialCapitalization
    : justCapitalize(textString as string)
}
