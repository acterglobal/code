import { formatISO } from 'date-fns'
import {
  Resolver,
  Query,
  Arg,
  Ctx,
  registerEnumType,
  Authorized,
  Mutation,
  UseMiddleware,
} from 'type-graphql'

import { withDateFilter } from '@acter/lib/api/resolvers/date-filter'
import { SearchActivitiesSortBy } from '@acter/lib/api/resolvers/get-order-by'
import {
  ActivitiesDateFilter,
  NotificationQueueType,
} from '@acter/lib/constants'
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

import { QueueNotificationsMiddleware } from '../middlewares/queue-notifications'
import { ActerResolver } from './acter'

registerEnumType(SearchActivitiesSortBy, {
  name: 'SearchActivitiesSortBy',
})

registerEnumType(ActivitiesDateFilter, {
  name: 'ActivitiesDateFilter',
})

const { ADMIN } = ActerConnectionRole

@Resolver(Activity)
export class ActivitiesResolver {
  @Query(() => [Activity])
  async activities(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('followerId') followerId: string,
    @Arg('dateFilter', { nullable: true })
    dateFilter: ActivitiesDateFilter
  ): Promise<Activity[]> {
    const where: Prisma.ActivityWhereInput = {
      AND: [
        {
          Acter: {
            is: {
              deletedAt: { equals: null },
              Followers: {
                some: { Follower: { is: { id: { equals: followerId } } } },
              },
            },
          },
        },
        withDateFilter(dateFilter),
      ].filter((clause) => !!clause),
    }

    const options = {
      where,
    }

    return await ctx.prisma.activity.findMany({
      ...options,
      orderBy: { startAt: 'desc' },
    })
  }

  @Authorized()
  @Mutation(() => Activity)
  @UseMiddleware(
    QueueNotificationsMiddleware(NotificationQueueType.NEW_ACTIVITY)
  )
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
    const acter = await new ActerResolver().createActerCustom(
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
      include: {
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
        createdByUser: {
          select: {
            Acter: true,
          },
        },
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
    await new ActerResolver().updateActerCustom(
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
