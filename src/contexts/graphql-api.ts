import { PrismaClient } from '@prisma/client'
import { Session } from '@auth0/nextjs-auth0'

export interface ActerGraphQLContext {
  prisma: PrismaClient
  session: Session
}
