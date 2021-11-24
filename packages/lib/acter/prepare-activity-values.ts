import { pipe } from 'fp-ts/function'

import { Activity } from '@acter/schema'

export type ActivityFormData = Omit<Partial<Activity>, 'isOnline'> & {
  id: string
  isOnline?: string | boolean
}

/**
 * Prepares provided data for an update to an Activity
 * @param values Values with which to update Activity
 * @param mutationFn
 * @returns
 */
export const prepareActivityValues = (
  formData: ActivityFormData
): ActivityFormData => {
  return pipe(formData, _setIsOnline)
}

export const _setIsOnline = (formData: ActivityFormData): ActivityFormData => {
  return {
    ...formData,
    isOnline: String(formData.isOnline) === 'true',
  }
}
