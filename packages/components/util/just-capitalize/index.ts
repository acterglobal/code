import capitalize from 'just-capitalize'

export const justCapitalize = (textString: string | unknown): string => {
  const capitalizedTextString = capitalize(textString)
  return capitalizedTextString
}
