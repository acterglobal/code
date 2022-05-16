import { ActerTypes } from '@acter/lib/constants'
import { ActerPrivacySettings } from '@acter/schema'
import { Prisma } from '@acter/schema/prisma'

export const withActerTypesSearch = (
  types: [string]
): Prisma.ActerWhereInput => {
  if (types.includes(ActerTypes.ACTIVITY)) {
    return {
      ActerType: {
        name: ActerTypes.ACTIVITY,
      },
      Activity: {
        Organiser: {
          isNot: {
            acterPrivacySetting: ActerPrivacySettings.PRIVATE,
          },
        },
      },
    }
  }

  return {
    ActerType: {
      name: {
        in: types,
        mode: 'insensitive',
      },
    },
  }
}
