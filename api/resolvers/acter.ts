import { Authorized, Resolver, Mutation, Arg, Ctx } from 'type-graphql'
import { ActerGraphQLContext } from 'src/contexts/graphql-api'
import slugify from 'slugify'

import { Acter, Activity, User } from '@schema'
@Resolver(Acter)
export class ActerResolver {
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
    const currentUser = await this.getCurrentUser(ctx)

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
        location,
        url,
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
  @Mutation(() => Acter)
  async updateActer(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('acterId') acterId: string,
    @Arg('name') name: string,
    @Arg('description', { nullable: true }) description: string,
    @Arg('location', { nullable: true }) location: string,
    @Arg('url', { nullable: true }) url: string,
    @Arg('avatarUrl', { nullable: true }) avatarUrl: string,
    @Arg('bannerUrl', { nullable: true }) bannerUrl: string,
    @Arg('interestIds', () => [String]) interestIds: [string]
  ): Promise<Acter> {
    const currentUser = await this.getCurrentUser(ctx)
    const acter = await ctx.prisma.acter.findUnique({
      select: {
        id: true,
        createdByUserId: true,
        ActerInterests: true,
      },
      where: { id: acterId },
    })

    if (
      currentUser.Acter.id !== acter.id &&
      acter.createdByUserId !== currentUser.id
    ) {
      console.error(`User ${currentUser.id} cannot modify acter ${acter.id}`)
      throw 'Not authorized'
    }

    // Every interestId from new interestId list that does NOT currently exist
    const currentInterestIdMap = acter.ActerInterests.reduce(
      (map, { interestId }) => ({ ...map, [interestId]: true }),
      {}
    )
    const createActerInterests = interestIds
      .filter((id) => !currentInterestIdMap[id])
      .map((interestId) => ({ interestId, createdByUserId: currentUser.id }))

    // Every interestId from CURRENT interestId list that does not exist in the new list
    const newInterestIdMap = interestIds.reduce(
      (map, interestId) => ({ ...map, [interestId]: true }),
      {}
    )
    const deleteActerInterests = acter.ActerInterests.filter(
      ({ interestId }) => !newInterestIdMap[interestId]
    ).map(({ id }) => ({ id }))

    return await ctx.prisma.acter.update({
      data: {
        name,
        description,
        location,
        url,
        avatarUrl,
        bannerUrl,
        updatedAt: new Date(),
        ActerInterests: {
          create: createActerInterests,
          delete: deleteActerInterests,
        },
      },
      where: { id: acterId },
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
    @Arg('isAllDay') isAllDay: boolean,
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
        isAllDay,
        organiserId: organiserActerId,
        acterId: acter.id,
        createdByUserId: acter.createdByUserId,
      },
    })
  }

  @Authorized()
  @Mutation(() => Activity)
  async updateActivity(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('acterId') acterId: string,
    @Arg('name') name: string,
    @Arg('description', { nullable: true }) description: string,
    @Arg('location', { nullable: true }) location: string,
    @Arg('url', { nullable: true }) url: string,
    @Arg('bannerUrl', { nullable: true }) bannerUrl: string,
    @Arg('interestIds', () => [String]) interestIds: [string],
    @Arg('startAt') startAt: Date,
    @Arg('endAt') endAt: Date,
    @Arg('isOnline') isOnline: boolean,
    @Arg('isAllDay') isAllDay: boolean,
    @Arg('organiserActerId') organiserActerId: string
  ): Promise<Activity> {
    await this.updateActer(
      ctx,
      acterId,
      name,
      description,
      location,
      url,
      null,
      bannerUrl,
      interestIds
    )

    return ctx.prisma.activity.update({
      data: {
        startAt,
        endAt,
        isOnline,
        isAllDay,
        organiserId: organiserActerId,
      },
      where: {
        acterId,
      },
    })
  }

  @Authorized()
  @Mutation(() => Acter)
  async deleteActer(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('acterId') acterId: string
  ): Promise<Acter> {
    const currentUser = await this.getCurrentUser(ctx)
    const acter = await ctx.prisma.acter.findUnique({
      select: {
        id: true,
        createdByUserId: true,
      },
      where: { id: acterId },
    })
    if (acter.createdByUserId !== currentUser.id) {
      throw 'Not authorized'
    }

    return await ctx.prisma.acter.update({
      data: {
        deletedAt: new Date(),
        deltedByUserId: currentUser.id,
      },
      where: {
        id: acterId,
      },
    })
  }

  async getCurrentUser(ctx: ActerGraphQLContext): Promise<Partial<User>> {
    return ctx.prisma.user.findFirst({
      select: {
        id: true,
        Acter: true,
      },
      where: { id: ctx.token.sub },
    })
  }
}
