import justCapitalize from 'just-capitalize'

export const capitalize = (textString: string | unknown): string => {
  return textString ? justCapitalize(textString) : ''
}
