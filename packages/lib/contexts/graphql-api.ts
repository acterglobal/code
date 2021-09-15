import { Session } from '@auth0/nextjs-auth0'

import { prisma } from '@acter/schema/prisma'

export interface ActerGraphQLContext {
  prisma: typeof prisma
  session: Session
}
