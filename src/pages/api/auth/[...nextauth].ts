import NextAuth, { NextAuthOptions } from 'next-auth'
import type { NextApiRequest, NextApiResponse } from 'next'
import Adapters from 'next-auth/adapters'
import Providers from 'next-auth/providers'
import prisma from 'src/lib/prisma'
import {sendVerificationRequest} from 'src/lib/next-auth/email-provider'
import { jwtConfig as jwt } from 'src/lib/next-auth/jwt'

import { User } from '@schema'

import { initSentry } from 'src/lib/sentry'

initSentry()

const options: NextAuthOptions = {
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT), 
        auth: {
          user: '',
          pass: '',
        }
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest
    }),
  ],

  pages: {
    signIn: '/login',
    verifyRequest: '/verify',
    newUser: '/profile',
    error: '/error',
  },

  events: {
    createUser: async (user: User) => {
      // Create a User Acter
      const userActerType = await prisma.acterType.findFirst({
        where: { name: 'user' },
      })
      if (!userActerType) {
        const err = 'Could not find user ActerType'
        console.error(err)
        throw err
      }

      // TODO: test this well
      const name = user.email.match(/^(.*)@/)[1]
      const matchingNames = await prisma.acter.findMany({
        where: { slug: { startsWith: name.toLocaleLowerCase() } },
      })
      const slug = matchingNames
        ? `${name}_${matchingNames.length}`
        : name.toLowerCase()

      try {
        await prisma.user.update({
          where: { id: user.id },
          data: {
            Acter: {
              create: {
                name,
                slug,
                acterTypeId: userActerType.id,
                createdByUserId: user.id,
              },
            },
          },
        })
      } catch (err) {
        console.error(err)
        throw err
      }
      console.info('Created User Acter to match User', user.id)
    },
  },

  adapter: Adapters.Prisma.Adapter({ prisma }),

  session: { jwt: true },
  jwt,
}

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> | void =>
  NextAuth(req, res, options)
