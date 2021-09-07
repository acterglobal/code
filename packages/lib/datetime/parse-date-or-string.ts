import { parseISO } from 'date-fns'

export const parseDateOrString = (dateString: Date | string): Date =>
  typeof dateString === 'string' ? parseISO(dateString) : dateString
