import NextAuth, { InitOptions } from 'next-auth'
import Adapters from 'next-auth/adapters'
import { PrismaClient } from '@prisma/client'
import Email from 'src/lib/next-auth/email-provider'

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

  adapter: Adapters.Prisma.Adapter({ prisma }),
}

export default (req, res) => NextAuth(req, res, options)
