import {
  Authorized,
  Resolver,
  Mutation,
  Arg,
  Ctx,
  UseMiddleware,
} from 'type-graphql'

import { createActerConnection } from '@acter/lib/api/create-acter-connection'
import { NotificationQueueType } from '@acter/lib/constants'
import { getLogger } from '@acter/lib/logger'
import type ActerGraphQLContext from '@acter/lib/types/graphql-api'
import { ActerConnection, ActerConnectionRole } from '@acter/schema'

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

    return await createActerConnection({
      prisma: ctx.prisma,
      followerActerId,
      followingActerId,
      createdByUserId,
      role,
    })
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
