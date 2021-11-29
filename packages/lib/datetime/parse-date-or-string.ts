import { parseJSON } from 'date-fns'

export const parseDateOrString = (dateString: Date | string): Date => {
  const res =
    typeof dateString === 'string' ? parseJSON(dateString) : dateString
  console.log('Parsing %s of %s to %s', typeof dateString, dateString, res)
  return res
}
