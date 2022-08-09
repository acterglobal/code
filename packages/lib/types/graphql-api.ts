import { Session } from '@auth0/nextjs-auth0'

import { User } from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

export default interface ActerGraphQLContext {
  prisma: typeof prisma
  session: Session & { user: Partial<User> }
}
