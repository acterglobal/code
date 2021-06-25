import { v4 } from 'uuid'

import { ActerConnection, ActerConnectionRole } from '@acter/schema/types'

export const ExampleActerConnection: ActerConnection = {
  id: v4(),
  followerActerId: v4(),
  followingActerId: v4(),
  createdAt: new Date(),
  updatedAt: new Date(),
  createdByUserId: v4(),
  role: ActerConnectionRole.MEMBER,
}
