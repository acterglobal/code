import { Prisma } from '@acter/schema/prisma'

export const withNameSearch = (name: string): Prisma.ActerWhereInput => {
  if (name) {
    return {
      name: {
        startsWith: name,
        mode: 'insensitive',
      },
    }
  }
}
