import { v4 } from 'uuid'

import { ActerConnection } from '@generated/type-graphql'

export const ExampleActerConnection: ActerConnection = {
  id: v4(),
  followerActerId: v4(),
  followingActerId: v4(),
  createdAt: new Date(),
  updatedAt: new Date(),
  createdByUserId: v4(),
}
