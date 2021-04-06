import { JWTOptions } from 'next-auth'
import jwt, { JWTDecodeParams } from 'next-auth/jwt'
import type { NextApiRequest } from 'next'
import { User } from '@schema'

export const jwtConfig: JWTOptions & JWTDecodeParams = {
  secret: process.env.JWT_SECRET,
  signingKey: process.env.JWT_SIGNING_KEY,
}

export interface JWTToken {
  email: string
  sub: string
}

export const getToken = async (req: NextApiRequest): Promise<JWTToken> =>
  (await jwt.getToken({ req, ...jwtConfig })) as JWTToken

type TokenUser = Omit<User, 'createdAt' | 'updatedAt'>

export const getTokenUser = async (
  req: NextApiRequest
): Promise<TokenUser | null> => {
  const token = await getToken(req)
  if (!token?.email || !token?.sub) {
    return null
  }

  const user: TokenUser = {
    id: token.sub,
    email: token.email,
  }
  return user
}
