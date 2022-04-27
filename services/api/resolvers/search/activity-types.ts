import { Prisma } from '@acter/schema/prisma'

export const withActivityTypesFilter = (
  activityTypes: [string]
): Prisma.ActerWhereInput => {
  if (activityTypes) {
    return {
      Activity: {
        ActivityType: {
          name: {
            in: activityTypes,
            mode: 'insensitive',
          },
        },
      },
    }
  }
}
