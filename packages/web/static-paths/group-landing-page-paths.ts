import { GetStaticPaths } from 'next'

import { prisma } from '@acter/schema/prisma'

export const getGroupLandingPageStaticPaths: GetStaticPaths = async () => {
  const acters = await prisma.acter.findMany({
    select: {
      slug: true,
      ActerType: {
        select: {
          name: true,
        },
      },
    },
    where: {
      ActerType: {
        name: {
          in: ['group'],
        },
      },
      deletedAt: null,
    },
  })

  const paths = acters.map((acter) => ({
    params: { acterType: acter.ActerType.name, slug: acter.slug },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}
