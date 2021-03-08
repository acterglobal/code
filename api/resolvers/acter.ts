import { Authorized, Resolver, Mutation, Arg, Ctx, Query } from 'type-graphql'
import { ActerGraphQLContext } from 'src/contexts/graphql-api'
import slugify from 'slugify'

import { Acter, Activity } from '@generated/type-graphql'
@Resolver(Acter)
export class ActerResolver {
  @Query(() => Acter)
  async getActer(
    @Ctx() ctx: ActerGraphQLContext,
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
  @Mutation(() => Acter)
  async createActer(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('name') name: string,
    @Arg('description', { nullable: true }) description: string,
    @Arg('location', { nullable: true }) location: string,
    @Arg('url', { nullable: true }) url: string,
    @Arg('acterTypeId') acterTypeId: string,
    @Arg('interestIds', () => [String]) interestIds: [string]
  ): Promise<Acter> {
    const currentUser = await ctx.prisma.user.findUnique({
      select: {
        id: true,
        Acter: true,
      },
      where: { id: ctx.token.sub },
    })
    if (!currentUser) {
      const err = 'No user found'
      console.error(err)
      throw err
    }
    const createdByUserId = currentUser.id

    const slug = slugify(name.toLocaleLowerCase())
    const existingActer = await ctx.prisma.acter.findFirst({
      where: {
        slug,
        acterTypeId,
      },
      select: {
        id: true,
        ActerType: {
          select: {
            name: true,
          },
        },
      },
    })
    if (existingActer) {
      const err = `Found existing ${existingActer.ActerType.name} Acter with slug ${slug}`
      console.error(err)
      throw err
    }

    return ctx.prisma.acter.create({
      data: {
        name,
        description,
        slug,
        acterTypeId,
        updatedAt: new Date(),
        createdByUserId,
        Followers: {
          create: [
            {
              followerActerId: currentUser.Acter.id,
              createdByUserId,
            },
          ],
        },
        ActerInterests: {
          create: interestIds.map((interestId) => ({
            interestId,
            createdByUserId,
          })),
        },
      },
    })
  }

  @Authorized()
  @Mutation(() => Activity)
  async createActivity(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('name') name: string,
    @Arg('description', { nullable: true }) description: string,
    @Arg('location', { nullable: true }) location: string,
    @Arg('url', { nullable: true }) url: string,
    @Arg('acterTypeId') acterTypeId: string,
    @Arg('interestIds', () => [String]) interestIds: [string],
    @Arg('startAt') startAt: Date,
    @Arg('endAt') endAt: Date,
    @Arg('isOnline') isOnline: boolean,
    @Arg('organiserActerId') organiserActerId: string
  ): Promise<Activity> {
    const acter = await this.createActer(
      ctx,
      name,
      description,
      location,
      url,
      acterTypeId,
      interestIds
    )

    return ctx.prisma.activity.create({
      data: {
        startAt,
        endAt,
        isOnline,
        organiserId: organiserActerId,
        acterId: acter.id,
        createdByUserId: acter.createdByUserId,
      },
    })
  }
}
