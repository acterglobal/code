import { MiddlewareFn } from 'type-graphql'

import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'

export const CheckInviteExists: MiddlewareFn<ActerGraphQLContext> = async (
  { context, args },
  next
) => {
  const { email, onActerId } = args
  const inviteExists = await context.prisma.invite.findFirst({
    where: { email, onActerId },
  })

  if (inviteExists) {
    const err = 'Invite already created for this user email.'
    console.error(err)
    throw err
  }
  return next()
}
