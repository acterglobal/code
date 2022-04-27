import { Prisma } from '@acter/schema/prisma'

export const withEndsBeforeSearch = (
  beforeDateTime: Date
): Prisma.ActerWhereInput => {
  if (beforeDateTime) {
    return {
      Activity: {
        endAt: {
          lte: beforeDateTime,
        },
      },
    }
  }
}
