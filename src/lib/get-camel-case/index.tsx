/**
 * Turn a name into initials
 * @param string to be turned into initials
 * @returns a string with the first letter uppercase
 */
export const getCamelCase = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1)
