import { GetStaticPaths } from 'next'

import { prisma } from '@acter/schema/prisma'

export const getPostStaticPath: GetStaticPaths = async () => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      Acter: {
        select: {
          slug: true,
          ActerType: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  })

  const paths = posts.map((post) => ({
    params: {
      acterType: post.Acter.ActerType.name,
      slug: post.Acter.slug,
      id: post.id,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}
