import { Prisma } from '@acter/schema/prisma'

interface LocationProps {
  north?: number
  east?: number
  south?: number
  west?: number
}

export const withLocation = ({
  north,
  east,
  south,
  west,
}: LocationProps): Prisma.ActerWhereInput => {
  if (north && east && south && west) {
    return {
      locationLat: {
        not: null,
        lt: north,
        gt: south,
      },
      locationLng: {
        not: null,
        lt: east,
        gt: west,
      },
    }
  }
}
