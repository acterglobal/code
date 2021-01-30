import { PrismaClient } from '@prisma/client'
import { Authorized, Resolver, Mutation, Arg, Ctx } from 'type-graphql'
import { Context } from '@apollo/client'
import { getSession } from 'next-auth/client'
import slugify from 'slugify'

import { Acter } from '@generated/type-graphql'

const prisma = new PrismaClient()

@Resolver(Acter)
export class ActerResolver {
  @Authorized()
  @Mutation((returns) => Acter)
  async createActer(
    @Ctx() ctx: Context,
    @Arg('name') name: string,
    @Arg('acterTypeId') acterTypeId: string
  ): Promise<Acter> {
    // TODO: this should be unique only for each ActerType
    const slug = slugify(name.toLocaleLowerCase())

    return prisma.acter.upsert({
      create: {
        name,
        slug,
        acterTypeId,
        updatedAt: new Date(),
        createdByUserId: ctx?.token?.sub,
      },
      update: {},
      where: {
        slug,
      },
    })
  }
}
