import { Post } from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

export const getUsersToNotify = async (parentId: string, authorId: string): Promise<string[]> => {
  const users = []
  let hasUsers = true
  let cursor: string | null = null

  const defaultFindParams: any = {
    take: 50,
    include: {
      Author: true
    },
    where: {
      parentId,
      Author: {
        id: {
          not: authorId
        }
      }
    },
    distinct: ['authorId']
  }

  while (hasUsers) {
    const userBatch = await prisma.post.findMany(
      cursor !== null
        ? { ...defaultFindParams, ...{ cursor: { id: cursor } } }
        : defaultFindParams
    )

    if (userBatch.length === 0) {
      hasUsers = false
    } else {
      cursor = userBatch[userBatch.length - 1].authorId

      users.push(...userBatch.map((u) => u.authorId))
    }
  }

  return users;
}