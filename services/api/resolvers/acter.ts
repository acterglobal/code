import { Authorized, Resolver, Mutation, Arg, Ctx } from 'type-graphql'

import { createSlug } from '@acter/lib/acter/create-acter-slug'
import { ActerTypes } from '@acter/lib/constants'
import { getLogger } from '@acter/lib/logger'
import type ActerGraphQLContext from '@acter/lib/types/graphql-api'
import {
  Acter,
  ActerConnectionRole,
  ActerJoinSettings,
  ActerNotificationEmailFrequency,
  ActerNotificationSettings,
  ActerPrivacySettings,
  ActerWhoCanJoinSettings,
} from '@acter/schema'

const { ACTIVITY, GROUP } = ActerTypes
const { ADMIN } = ActerConnectionRole

const l = getLogger('ActerResolver')
@Resolver(Acter)
export class ActerResolver {
  @Authorized()
  @Mutation(() => Acter)
  async createOneActerCustom(
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
      l.warn(err)
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
  async updateOneActerCustom(
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
}
