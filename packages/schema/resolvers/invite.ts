import {
  Authorized,
  Resolver,
  Mutation,
  Arg,
  Ctx,
  UseMiddleware,
} from 'type-graphql'

import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'
import { Invite } from '@acter/schema'
import { CheckInviteExists } from '@acter/schema/middlewares/check-invite-exists'
import { SessionChecker } from '@acter/schema/middlewares/session-checker'

@Resolver(Invite)
export class InviteResolver {
  @Authorized()
  @Mutation(() => Invite)
  @UseMiddleware(SessionChecker, CheckInviteExists)
  async createInviteCustom(
    @Ctx() ctx: ActerGraphQLContext,
    @Arg('email') email: string,
    @Arg('message') message: string,
    @Arg('onActerId') onActerId: string
  ): Promise<Invite> {
    return await ctx.prisma.invite.create({
      data: { email, message, onActerId, createdByUserId: ctx.session.user.id },
    })
  }
}
