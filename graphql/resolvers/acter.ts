import { Authorized, Resolver, Mutation, Arg, Ctx, Query } from 'type-graphql'
import { Context } from '@apollo/client'
import slugify from 'slugify'

import { Acter } from '@generated/type-graphql'
@Resolver(Acter)
export class ActerResolver {
  @Query((returns) => Acter)
  async getActer(
    @Ctx() ctx: Context,
    @Arg('acterTypeId') acterTypeId: string,
    @Arg('slug') slug: string
  ): Promise<Acter> {
    return ctx.prisma.acter.findUnique({
      where: {
        slug_unique_for_acter_type: { slug, acterTypeId },
      },
    })
  }

  @Authorized()
  @Mutation((returns) => Acter)
  async createActer(
    @Ctx() ctx: Context,
    @Arg('name') name: string,
    @Arg('description') description: string,
    @Arg('acterTypeId') acterTypeId: string
  ): Promise<Acter> {
    const slug = slugify(name.toLocaleLowerCase())

    return ctx.prisma.acter.upsert({
      create: {
        name,
        description,
        slug,
        acterTypeId,
        updatedAt: new Date(),
        createdByUserId: ctx?.token?.sub,
      },
      update: {},
      where: {
        slug_unique_for_acter_type: { slug, acterTypeId },
      },
    })
  }
}
