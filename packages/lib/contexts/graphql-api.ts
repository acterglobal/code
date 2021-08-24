import { prisma } from '@acter/schema/prisma'
import { Session } from '@auth0/nextjs-auth0'

export interface ActerGraphQLContext {
  prisma: typeof prisma
  session: Session
}
