/**
 * Turn a name into initials
 * @param name string to be turned into initials
 * @param count number of initials. Default is 2
 * @returns a string with the first X initials of the passed name
 */
export const getInitials = (name: string, count = 2): string => {
  return name
    .split(' ')
    .slice(0, count)
    .reduce((prev, cur) => `${prev}${cur.substr(0, 1)}`, '')
}
