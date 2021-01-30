import { JWTOptions } from 'next-auth'
import jwt, { JWTDecodeParams } from 'next-auth/jwt'

export const jwtConfig: JWTOptions & JWTDecodeParams = {
  secret: process.env.JWT_SECRET,
  signingKey: process.env.JWT_SIGNING_KEY,
}

interface JWTToken {
  email: string
  sub: string
}

export const getToken = async (req): Promise<JWTToken> =>
  (await jwt.getToken({ req, ...jwtConfig })) as JWTToken
