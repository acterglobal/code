import { PrismaClient } from '@prisma/client'
import { JWTToken } from 'src/lib/next-auth/jwt'

export interface ActerGraphQLContext {
  prisma: PrismaClient
  token: JWTToken
}
