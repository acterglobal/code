import { PrismaClient } from '@prisma/client'

/* eslint-disable */
declare global {
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient
    }
  }
}
/* eslint-enable */

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      // log: ['query'],
    })
  }

  prisma = global.prisma
}

export default prisma
