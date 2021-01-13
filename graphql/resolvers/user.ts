import { PrismaClient } from '@prisma/client'
import { Resolver, Query, Arg } from 'type-graphql'

import { User } from '@generated/type-graphql'

const prisma = new PrismaClient()

@Resolver(User)
export class UserResolver {
  @Query((returns) => User)
  async user(@Arg('email') email: string) {
    return prisma.user.findUnique({
      where: { email },
    })
  }
}
