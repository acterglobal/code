import { parseJSON } from 'date-fns'

export const parseDateOrString = (dateString: Date | string): Date => {
  return typeof dateString === 'string' ? parseJSON(dateString) : dateString
}
