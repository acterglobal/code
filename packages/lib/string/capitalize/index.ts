import justCapitalize from 'just-capitalize'

export const capitalize = (textString: string | unknown): string => {
  const capitalizedTextString = justCapitalize(textString)
  return capitalizedTextString
}
