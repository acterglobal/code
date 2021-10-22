import { QueueNewMemberJoinNotification } from '../middlewares/queue-member-join-notification'
import {
  Authorized,
  Resolver,
  Mutation,
  Arg,
  Ctx,
  UseMiddleware,
} from 'type-graphql'

import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'
import {
  ActerConnection,
  ActerConnectionRole,
  ActerJoinSettings,
} from '@acter/schema'
import { SessionChecker } from '@acter/schema/middlewares/session-checker'

@Resolver(ActerConnection)
export class ActerConnectionResolver {
  @Authorized()
  @Mutation(() => ActerConnection)
  @UseMiddleware(QueueNewMemberJoinNotification)
  async createActerConnectionCustom(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('followerActerId') followerActerId: string,
    @Arg('followingActerId') followingActerId: string
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
      console.error(err)
      throw err
    }

    const role =
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
        role,
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
  @UseMiddleware(SessionChecker)
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
      console.error(err)
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
      console.error(err)
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
