import { Authorized, Resolver, Mutation, Arg, Ctx } from 'type-graphql'

import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'
import { getCurrentUserFromContext } from '@acter/lib/user/get-current-user-from-context'
import {
  ActerConnection,
  ActerConnectionRole,
  ActerJoinSettings,
} from '@acter/schema'

@Resolver(ActerConnection)
export class ActerConnectionResolver {
  @Authorized()
  @Mutation(() => ActerConnection)
  async createActerConnectionCustom(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('followerActerId') followerActerId: string,
    @Arg('followingActerId') followingActerId: string
  ): Promise<ActerConnection> {
    const currentUser = await getCurrentUserFromContext(ctx)
    if (!currentUser) {
      const err = 'No user found'
      console.error(err)
      throw err
    }
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

    return ctx.prisma.acterConnection.upsert({
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
  }

  @Authorized()
  @Mutation(() => ActerConnection)
  async updateActerConnectionCustom(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('connectionId') connectionId: string,
    @Arg('role') role: ActerConnectionRole
  ): Promise<ActerConnection> {
    const currentUser = await getCurrentUserFromContext(ctx)
    if (!currentUser) {
      const err = 'No user found'
      console.error(err)
      throw err
    }

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
