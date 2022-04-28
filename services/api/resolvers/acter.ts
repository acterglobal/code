import { formatISO } from 'date-fns'
import {
  Authorized,
  Resolver,
  Mutation,
  Arg,
  Ctx,
  UseMiddleware,
} from 'type-graphql'

import { createSlug } from '@acter/lib/acter/create-acter-slug'
import { ActerTypes, NotificationQueueType } from '@acter/lib/constants'
import type { ActerGraphQLContext } from '@acter/lib/types/graphql-api'
import {
  Acter,
  ActerConnectionRole,
  ActerJoinSettings,
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
  ActerPrivacySettings,
  ActerWhoCanJoinSettings,
  Activity,
} from '@acter/schema'
import { Prisma } from '@acter/schema/prisma'

import { QueueNotifications } from '../middlewares/queue-notifications'

const { ACTIVITY, GROUP } = ActerTypes
const { ADMIN } = ActerConnectionRole
@Resolver(Acter)
export class ActerResolver {
  @Authorized()
  @Mutation(() => Acter)
  async createActerCustom(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('name') name: string,
    @Arg('description', { nullable: true }) description: string,
    @Arg('location', { nullable: true }) location: string,
    @Arg('locationLat', { nullable: true }) locationLat: number,
    @Arg('locationLng', { nullable: true }) locationLng: number,
    @Arg('placeId', { nullable: true }) placeId: string,
    @Arg('url', { nullable: true }) url: string,
    @Arg('acterJoinSetting', () => ActerJoinSettings, { nullable: true })
    acterJoinSetting: ActerJoinSettings,
    @Arg('acterNotifyEmailFrequency', () => ActerNotificationEmailFrequency, {
      nullable: true,
    })
    acterNotifyEmailFrequency: ActerNotificationEmailFrequency,
    @Arg('acterPrivacySetting', () => ActerPrivacySettings, { nullable: true })
    acterPrivacySetting: ActerPrivacySettings,
    @Arg('acterWhoCanJoinSetting', () => ActerWhoCanJoinSettings, {
      nullable: true,
    })
    acterWhoCanJoinSetting: ActerWhoCanJoinSettings,
    @Arg('acterTypeId') acterTypeId: string,
    @Arg('parentActerId', { nullable: true }) parentActerId: string,
    @Arg('interestIds', () => [String]) interestIds: [string],
    @Arg('followerIds', () => [String], { nullable: true })
    followerIds: [string],
    @Arg('parentAdminActerIds', () => [String], { nullable: true })
    parentAdminActerIds: [string?] = [],
    @Arg('parentAdminUserIds', () => [String], { nullable: true })
    parentAdminUserIds: [string?] = []
  ): Promise<Acter> {
    const currentUser = ctx.session.user

    const createdByUserId = currentUser.id

    const acterType = await ctx.prisma.acterType.findFirst({
      select: { name: true },
      where: { id: acterTypeId },
    })

    const slug = await createSlug(
      ctx,
      name,
      [GROUP, ACTIVITY].includes(acterType.name as ActerTypes)
        ? parentActerId
        : null
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

    const parentActerAdminConnectlist = [
      ...parentAdminActerIds.map((id, index) => ({
        followerActerId: id,
        role: ADMIN,
        createdByUserId: parentAdminUserIds[index],
      })),
    ]

    const followerList = [
      ...parentActerAdminConnectlist,
      ...followerConnectList,
    ]

    return ctx.prisma.acter.create({
      data: {
        name,
        description,
        slug,
        location,
        locationLat,
        locationLng,
        placeId,
        url,
        acterJoinSetting,
        acterNotifyEmailFrequency,
        acterPrivacySetting,
        acterWhoCanJoinSetting,
        acterTypeId,
        parentActerId,
        updatedAt: new Date(),
        createdByUserId,
        Followers: {
          create: followerList,
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

  @Authorized(ADMIN)
  @Mutation(() => Acter)
  async updateActerCustom(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('acterId') acterId: string,
    @Arg('name') name: string,
    @Arg('description', { nullable: true }) description: string,
    @Arg('location', { nullable: true }) location: string,
    @Arg('locationLat', { nullable: true }) locationLat: number,
    @Arg('locationLng', { nullable: true }) locationLng: number,
    @Arg('placeId', { nullable: true }) placeId: string,
    @Arg('url', { nullable: true }) url: string,
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
    @Arg('acterPrivacySetting', () => ActerPrivacySettings, { nullable: true })
    acterPrivacySetting: ActerPrivacySettings,
    @Arg('acterWhoCanJoinSetting', () => ActerWhoCanJoinSettings, {
      nullable: true,
    })
    acterWhoCanJoinSetting: ActerWhoCanJoinSettings,
    @Arg('acterTypeId') acterTypeId: string,
    @Arg('avatarUrl', { nullable: true }) avatarUrl: string,
    @Arg('bannerUrl', { nullable: true }) bannerUrl: string,
    @Arg('interestIds', () => [String]) interestIds: [string],
    @Arg('followerIds', () => [String], { nullable: true })
    followerIds: [string]
  ): Promise<Acter> {
    const currentUser = ctx.session.user

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
        locationLat,
        locationLng,
        placeId,
        url,
        acterJoinSetting,
        acterNotifySetting,
        acterNotifyEmailFrequency,
        acterPrivacySetting,
        acterWhoCanJoinSetting,
        acterTypeId,
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
  @UseMiddleware(QueueNotifications(NotificationQueueType.NEW_ACTIVITY))
  async createActivityCustom(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('name') name: string,
    @Arg('description', { nullable: true }) description: string,
    @Arg('location', { nullable: true }) location: string,
    @Arg('locationLat', { nullable: true }) locationLat: number,
    @Arg('locationLng', { nullable: true }) locationLng: number,
    @Arg('placeId', { nullable: true }) placeId: string,
    @Arg('url', { nullable: true }) url: string,
    @Arg('acterJoinSetting', () => ActerJoinSettings, { nullable: true })
    acterJoinSetting: ActerJoinSettings,
    @Arg('acterNotifyEmailFrequency', () => ActerNotificationEmailFrequency, {
      nullable: true,
    })
    acterNotifyEmailFrequency: ActerNotificationEmailFrequency,
    @Arg('acterPrivacySetting', () => ActerPrivacySettings, { nullable: true })
    acterPrivacySetting: ActerPrivacySettings,
    @Arg('acterWhoCanJoinSetting', () => ActerWhoCanJoinSettings, {
      nullable: true,
    })
    acterWhoCanJoinSetting: ActerWhoCanJoinSettings,
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
    followerIds: [string],
    @Arg('parentAdminActerIds', () => [String], { nullable: true })
    parentAdminActerIds: [string?] = [],
    @Arg('parentAdminUserIds', () => [String], { nullable: true })
    parentAdminUserIds: [string?] = []
  ): Promise<Partial<Activity>> {
    const acter = await this.createActerCustom(
      ctx,
      name,
      description,
      location,
      locationLat,
      locationLng,
      placeId,
      url,
      acterJoinSetting,
      acterNotifyEmailFrequency,
      acterPrivacySetting,
      acterWhoCanJoinSetting,
      acterTypeId,
      organiserActerId,
      interestIds,
      followerIds,
      parentAdminActerIds,
      parentAdminUserIds
    )

    const activity = await ctx.prisma.activity.create({
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
    })

    return activity as Partial<Activity>
  }

  @Authorized()
  @Mutation(() => Activity)
  async updateActivityCustom(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('acterId') acterId: string,
    @Arg('name') name: string,
    @Arg('description', { nullable: true }) description: string,
    @Arg('location', { nullable: true }) location: string,
    @Arg('locationLat', { nullable: true }) locationLat: number,
    @Arg('locationLng', { nullable: true }) locationLng: number,
    @Arg('placeId', { nullable: true }) placeId: string,
    @Arg('url', { nullable: true }) url: string,
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
    @Arg('acterPrivacySetting', () => ActerPrivacySettings, { nullable: true })
    acterPrivacySetting: ActerPrivacySettings,
    @Arg('acterWhoCanJoinSetting', () => ActerWhoCanJoinSettings, {
      nullable: true,
    })
    acterWhoCanJoinSetting: ActerWhoCanJoinSettings,
    @Arg('acterTypeId') acterTypeId: string,
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
    await this.updateActerCustom(
      ctx,
      acterId,
      name,
      description,
      location,
      locationLat,
      locationLng,
      placeId,
      url,
      acterJoinSetting,
      acterNotifySetting,
      acterNotifyEmailFrequency,
      acterPrivacySetting,
      acterWhoCanJoinSetting,
      acterTypeId,
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

  @Authorized(ADMIN)
  @Mutation(() => Acter)
  async deleteActerCustom(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('acterId') acterId: string
  ): Promise<Acter> {
    const acterSelect: Prisma.ActerSelect = {
      id: true,
      slug: true,
    }

    const acter = await ctx.prisma.acter.findUnique({
      select: {
        ...acterSelect,
        Children: {
          select: acterSelect,
        },
      },
      where: { id: acterId },
    })

    // Flatten the parent/child and update slugs and deletedAt for all
    const updates = [acter, ...acter.Children].map((child: Partial<Acter>) => {
      const deletedAt = new Date()
      const deletedSlug = `deleted-${child.slug}-${formatISO(deletedAt)}`

      return ctx.prisma.acter.update({
        data: {
          slug: deletedSlug,
          deletedAt: deletedAt,
          deletedByUserId: ctx.session.user.id,
        },
        where: {
          id: child.id,
        },
      })
    })

    const res = await ctx.prisma.$transaction(updates)

    return res[0]
  }
}
