import { PrismaClient } from '@prisma/client'
import { Resolver, Query, Arg } from 'type-graphql'

import { ActerType } from '@generated/type-graphql'

const prisma = new PrismaClient()

@Resolver(ActerType)
export class ActerTypeResolver {
  @Query((returns) => [ActerType])
  async acterTypes() {
    return prisma.acterType.findMany()
  }
}
