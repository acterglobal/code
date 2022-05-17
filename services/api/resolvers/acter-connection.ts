import {
  Authorized,
  Resolver,
  Mutation,
  Arg,
  Ctx,
  UseMiddleware,
} from 'type-graphql'

import { NotificationQueueType } from '@acter/lib/constants'
import { getLogger } from '@acter/lib/logger'
import type { ActerGraphQLContext } from '@acter/lib/types/graphql-api'
import {
  ActerConnection,
  ActerConnectionRole,
  ActerJoinSettings,
} from '@acter/schema'

import { QueueNotificationsMiddleware } from '../middlewares/queue-notifications'

const l = getLogger('ActerConnectionResolver')
@Resolver(ActerConnection)
export class ActerConnectionResolver {
  @Authorized()
  @Mutation(() => ActerConnection)
  @UseMiddleware(QueueNotificationsMiddleware(NotificationQueueType.NEW_MEMBER))
  async createActerConnectionCustom(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('followerActerId') followerActerId: string,
    @Arg('followingActerId') followingActerId: string,
    @Arg('role', { nullable: true }) role: ActerConnectionRole
  ): Promise<ActerConnection> {
    const currentUser = ctx.session.user

    const createdByUserId = currentUser.id

    const followingActer = await ctx.prisma.acter.findFirst({
      select: {
        id: true,
        acterJoinSetting: true,
      },
      where: { id: followingActerId },
    })
    if (!followingActer) {
      const err = 'No user found'
      l.warn(err)
      throw err
    }

    const getDefaultRole = () =>
      followingActer.acterJoinSetting === ActerJoinSettings.EVERYONE
        ? ActerConnectionRole.MEMBER
        : ActerConnectionRole.PENDING

    const connection = await ctx.prisma.acterConnection.upsert({
      include: {
        Follower: {
          include: {
            ActerType: true,
          },
        },
        Following: {
          include: {
            ActerType: true,
          },
        },
      },
      create: {
        followerActerId,
        followingActerId,
        role: role || getDefaultRole(),
        createdByUserId,
      },
      update: {},
      where: {
        acter_follower_following: {
          followerActerId,
          followingActerId,
        },
      },
    })

    return connection
  }

  @Authorized()
  @Mutation(() => ActerConnection)
  async updateActerConnectionCustom(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('connectionId') connectionId: string,
    @Arg('role') role: ActerConnectionRole
  ): Promise<ActerConnection> {
    const currentUser = ctx.session.user

    const connection = await ctx.prisma.acterConnection.findFirst({
      where: { id: connectionId },
      include: {
        Following: true,
      },
    })
    if (!connection) {
      const err = 'No connection found'
      l.error(err)
      throw err
    }

    const isAdmin = await ctx.prisma.acterConnection.findFirst({
      where: {
        followerActerId: currentUser.Acter.id,
        followingActerId: connection.Following.id,
        role: ActerConnectionRole.ADMIN,
      },
    })

    if (!isAdmin) {
      const err = 'Not authorized'
      l.error(err)
      throw err
    }

    return ctx.prisma.acterConnection.update({
      where: {
        id: connectionId,
      },
      data: {
        role,
      },
    })
  }
}