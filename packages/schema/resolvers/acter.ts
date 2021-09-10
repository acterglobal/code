import { Authorized, Resolver, Mutation, Arg, Ctx } from 'type-graphql'
import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'
import { getCurrentUserFromContext } from '@acter/lib/user/get-current-user-from-context'
import {
  Acter,
  ActerConnectionRole,
  ActerJoinSettings,
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
  Activity,
} from '@acter/schema'
import { createSlug } from '@acter/lib/acter/create-acter-slug'
import { ActerTypes } from '@acter/lib/constants'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { activityNotificationsQueue, ActivityPick } from '@acter/jobs'

const { ACTIVITY, GROUP } = ActerTypes
const { ADMIN } = ActerConnectionRole
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
    @Arg('useAdmins', { nullable: true }) useAdmins: boolean,
    @Arg('acterJoinSetting', () => ActerJoinSettings, { nullable: true })
    acterJoinSetting: ActerJoinSettings,
    @Arg('acterNotifyEmailFrequency', () => ActerNotificationEmailFrequency, {
      nullable: true,
    })
    acterNotifyEmailFrequency: ActerNotificationEmailFrequency,
    @Arg('acterTypeId') acterTypeId: string,
    @Arg('parentActerId', { nullable: true }) parentActerId: string,
    @Arg('interestIds', () => [String]) interestIds: [string],
    @Arg('followerIds', () => [String], { nullable: true })
    followerIds: [string]
  ): Promise<Acter> {
    const currentUser = await getCurrentUserFromContext(ctx)

    if (!currentUser) {
      const err = 'No user found'
      console.error(err)
      throw err
    }
    const createdByUserId = currentUser.id

    const acterType = await ctx.prisma.acterType.findFirst({
      select: { name: true },
      where: { id: acterTypeId },
    })

    const slug = await createSlug(
      ctx,
      name,
      [GROUP, ACTIVITY].includes(acterType.name) ? parentActerId : null
    )

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

    const followerConnectList = [
      ...followerIds.map((id) => ({
        followerActerId: id,
        createdByUserId,
      })),
      {
        followerActerId: currentUser.Acter.id,
        role: ADMIN,
        createdByUserId,
      },
    ]

    return ctx.prisma.acter.create({
      data: {
        name,
        description,
        slug,
        location,
        url,
        useAdmins,
        acterJoinSetting,
        acterNotifyEmailFrequency,
        acterTypeId,
        parentActerId,
        updatedAt: new Date(),
        createdByUserId,
        Followers: {
          create: followerConnectList,
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
    @Arg('useAdmins', { nullable: true }) useAdmins: boolean,
    @Arg('acterJoinSetting', () => ActerJoinSettings, { nullable: true })
    acterJoinSetting: ActerJoinSettings,
    @Arg('acterNotifySetting', () => ActerNotificationSettings, {
      nullable: true,
    })
    acterNotifySetting: ActerNotificationSettings,
    @Arg('acterNotifyEmailFrequency', () => ActerNotificationEmailFrequency, {
      nullable: true,
    })
    acterNotifyEmailFrequency: ActerNotificationEmailFrequency,
    @Arg('avatarUrl', { nullable: true }) avatarUrl: string,
    @Arg('bannerUrl', { nullable: true }) bannerUrl: string,
    @Arg('interestIds', () => [String]) interestIds: [string],
    @Arg('followerIds', () => [String], { nullable: true })
    followerIds: [string]
  ): Promise<Acter> {
    const currentUser = await getCurrentUserFromContext(ctx)

    const acter = await ctx.prisma.acter.findUnique({
      select: {
        id: true,
        createdByUserId: true,
        ActerInterests: true,
        Followers: {
          include: { Follower: true },
        },
      },
      where: { id: acterId },
    })

    const isAdmin = userHasRoleOnActer(currentUser, ADMIN, acter)

    if (!isAdmin) {
      console.error(`User ${currentUser.id} cannot modify acter ${acter.id}`)
      throw 'Not authorized'
    }

    //TODO: DRY up how we do the same logic for both interests and followers
    const currentInterestIdMap = acter.ActerInterests.reduce(
      (map, { interestId }) => ({ ...map, [interestId]: true }),
      {}
    )
    // Every interestId from new interestId list that does NOT currently exist
    const createActerInterests = interestIds
      .filter((id) => !currentInterestIdMap[id])
      .map((interestId) => ({ interestId, createdByUserId: currentUser.id }))

    const newInterestIdMap = interestIds.reduce(
      (map, interestId) => ({ ...map, [interestId]: true }),
      {}
    )
    // Every interestId from CURRENT interestId list that does not exist in the new list
    const deleteActerInterests = acter.ActerInterests.filter(
      ({ interestId }) => !newInterestIdMap[interestId]
    ).map(({ id }) => ({ id }))

    const currentFollowerIdMap = acter.Followers.reduce(
      (map, { followerActerId }) => ({ ...map, [followerActerId]: true }),
      {}
    )
    // Every new followerActerId that does not exist in the DB
    const createFollowers = followerIds
      .filter((id) => !currentFollowerIdMap[id])
      .map((followerActerId) => ({
        followerActerId,
        createdByUserId: currentUser.id,
      }))
    // const newFollowerIdMap = followerIds.reduce(
    //   (map, id) => ({
    //     ...map,
    //     [id]: true,
    //   }),
    //   {}
    // )
    // Every current/db followerActer that does not occurr in the new list
    // const deleteFollowers = acter.Followers.filter(
    //   ({ followerActerId }) => !newFollowerIdMap[followerActerId]
    // ).map(({ id }) => ({ id }))

    return await ctx.prisma.acter.update({
      data: {
        name,
        description,
        location,
        url,
        useAdmins,
        acterJoinSetting,
        acterNotifySetting,
        acterNotifyEmailFrequency,
        avatarUrl,
        bannerUrl,
        updatedAt: new Date(),
        ActerInterests: {
          create: createActerInterests,
          delete: deleteActerInterests,
        },
        Followers: {
          create: createFollowers,
          // delete: deleteFollowers,
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
    @Arg('useAdmins', { nullable: true }) useAdmins: boolean,
    @Arg('acterJoinSetting', () => ActerJoinSettings, { nullable: true })
    acterJoinSetting: ActerJoinSettings,
    @Arg('acterNotifyEmailFrequency', () => ActerNotificationEmailFrequency, {
      nullable: true,
    })
    acterNotifyEmailFrequency: ActerNotificationEmailFrequency,
    @Arg('acterTypeId') acterTypeId: string,
    @Arg('interestIds', () => [String]) interestIds: [string],
    @Arg('startAt') startAt: Date,
    @Arg('endAt') endAt: Date,
    @Arg('isOnline') isOnline: boolean,
    @Arg('isAllDay') isAllDay: boolean,
    @Arg('organiserActerId') organiserActerId: string,
    @Arg('activityTypeId') activityTypeId: string,
    @Arg('parentActerId', { nullable: true }) parentActerId: string,
    @Arg('followerIds', () => [String], { nullable: true })
    followerIds: [string]
  ): Promise<Partial<Activity>> {
    const acter = await this.createActer(
      ctx,
      name,
      description,
      location,
      url,
      useAdmins,
      acterJoinSetting,
      acterNotifyEmailFrequency,
      acterTypeId,
      organiserActerId,
      interestIds,
      followerIds
    )

    const activity = (await ctx.prisma.activity.create({
      data: {
        startAt,
        endAt,
        isOnline,
        isAllDay,
        activityTypeId: activityTypeId,
        organiserId: organiserActerId,
        acterId: acter.id,
        createdByUserId: acter.createdByUserId,
      },
      select: {
        acterId: true,
        createdByUserId: true,
        endAt: true,
        id: true,
        isAllDay: true,
        startAt: true,
        Acter: {
          select: {
            id: true,
            name: true,
            slug: true,
            acterNotifyEmailFrequency: true,
            ActerType: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        ActivityType: true,
      },
    })) as ActivityPick
    console.debug(
      'Setting Activity notification from custom resolver',
      activity
    )
    activityNotificationsQueue.add(
      `new-activity-${activity.id}`,
      {
        activity,
      },
      {
        removeOnComplete: true,
      }
    )

    return activity as Partial<Activity>
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
    @Arg('useAdmins', { nullable: true }) useAdmins: boolean,
    @Arg('acterJoinSetting', () => ActerJoinSettings, { nullable: true })
    acterJoinSetting: ActerJoinSettings,
    @Arg('acterNotifySetting', () => ActerNotificationSettings, {
      nullable: true,
    })
    acterNotifySetting: ActerNotificationSettings,
    @Arg('acterNotifyEmailFrequency', () => ActerNotificationEmailFrequency, {
      nullable: true,
    })
    acterNotifyEmailFrequency: ActerNotificationEmailFrequency,
    @Arg('bannerUrl', { nullable: true })
    bannerUrl: string,
    @Arg('interestIds', () => [String]) interestIds: [string],
    @Arg('startAt') startAt: Date,
    @Arg('endAt') endAt: Date,
    @Arg('isOnline') isOnline: boolean,
    @Arg('isAllDay') isAllDay: boolean,
    @Arg('organiserActerId') organiserActerId: string,
    @Arg('activityTypeId') activityTypeId: string,
    @Arg('followerIds', () => [String], { nullable: true })
    followerIds: [string]
  ): Promise<Activity> {
    await this.updateActer(
      ctx,
      acterId,
      name,
      description,
      location,
      url,
      useAdmins,
      acterJoinSetting,
      acterNotifySetting,
      acterNotifyEmailFrequency,
      null,
      bannerUrl,
      interestIds,
      followerIds
    )

    return ctx.prisma.activity.update({
      data: {
        startAt,
        endAt,
        isOnline,
        isAllDay,
        organiserId: organiserActerId,
        activityTypeId: activityTypeId,
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
    const currentUser = await getCurrentUserFromContext(ctx)
    const acter = await ctx.prisma.acter.findUnique({
      select: {
        id: true,
        createdByUserId: true,
        Followers: {
          include: { Follower: true },
        },
      },
      where: { id: acterId },
    })

    const isAdmin = userHasRoleOnActer(currentUser, ADMIN, acter)

    if (!isAdmin) {
      throw 'Not authorized'
    }

    return await ctx.prisma.acter.update({
      data: {
        deletedAt: new Date(),
        deltedByUserId: currentUser.id, // TODO: fix typo
      },
      where: {
        id: acterId,
      },
    })
  }
}
