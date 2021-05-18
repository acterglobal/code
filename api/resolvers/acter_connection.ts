import { Authorized, Resolver, Mutation, Arg, Ctx } from 'type-graphql'
import { ActerGraphQLContext } from 'src/contexts/graphql-api'
import { getCurrentUserFromContext } from 'src/lib/user/get-current-user-from-context'
import {
  ActerConnection,
  ActerConnectionStatus,
  ActerJoinSettings,
  User,
} from '@schema'

@Resolver(ActerConnection)
export class ActerConnectionResolver {
  @Authorized()
  @Mutation(() => ActerConnection)
  async createActerConnection(
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
        userJoinSetting: true,
      },
      where: { id: followingActerId },
    })
    if (!followingActer) {
      const err = 'No user found'
      console.error(err)
      throw err
    }

    const status =
      followingActer.userJoinSetting === ActerJoinSettings.EVERYONE
        ? ActerConnectionStatus.MEMBER
        : ActerConnectionStatus.PENDING

    return ctx.prisma.acterConnection.upsert({
      create: {
        followerActerId,
        followingActerId,
        status,
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
  async updateActerConnection(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('connectionId') connectionId: string,
    @Arg('status') status: ActerConnectionStatus
  ): Promise<ActerConnection> {
    const currentUser = await getCurrentUserFromContext(ctx)
    if (!currentUser) {
      const err = 'No user found'
      console.error(err)
      throw err
    }

    console.log('User is ', currentUser)

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

    console.log('Connection is', connection)

    const isAdmin = await ctx.prisma.acterConnection.findFirst({
      where: {
        followerActerId: currentUser.Acter.id,
        followingActerId: connection.Following.id,
        status: ActerConnectionStatus.ADMIN,
      },
    })

    console.log('admin is ', isAdmin)

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
        status,
      },
    })
  }
}
