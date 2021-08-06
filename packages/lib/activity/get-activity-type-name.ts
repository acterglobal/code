import { ActivityType } from '@acter/schema'
/**
 * Gives activity type name by it activity type id
 * @param typeId activity type id
 * @param activityTypes list of all activity types
 * @returns activity type name
 */
export const getActivityTypeNameById = (
  typeId: string,
  activityTypes: ActivityType[]
): string => {
  const activityType = activityTypes.find((type) => type.id === typeId)
  return activityType.name
}
