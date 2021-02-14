import NextAuth, { InitOptions } from 'next-auth'
import Adapters from 'next-auth/adapters'
import { PrismaClient } from '@prisma/client'
import Email from 'src/lib/next-auth/email-provider'
import { jwtConfig as jwt } from 'src/lib/next-auth/jwt'

const prisma = new PrismaClient()

const options: InitOptions = {
  providers: [
    Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT),
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],

  events: {
    async signIn(message) { console.log('NextAuth signIn: ', message) },
    async signOut(message) { console.log('NextAuth signOut: ', message) },
    async createUser(message) { console.log('NextAuth createUser: ', message) },
    async linkAccount(message) { console.log('NextAuth linkAccount: ', message) },
    async session(message) { console.log('NextAuth session: ', message) },
    async error(message) { console.log('NextAuth error: ', message) }
  }

  adapter: Adapters.Prisma.Adapter({ prisma }),

  session: { jwt: true },
  jwt,
}

export default (req, res) => NextAuth(req, res, options)
