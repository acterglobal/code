import { Prisma } from '@acter/schema/prisma'

export const withInterestsFilter = (
  interestNames: [string]
): Prisma.ActerWhereInput => {
  if (interestNames && interestNames.length > 0) {
    return {
      ActerInterests: {
        some: {
          Interest: {
            name: {
              in: interestNames,
              mode: 'insensitive',
            },
          },
        },
      },
    }
  }
}
