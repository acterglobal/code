import { User } from '@generated/type-graphql'
import { v4 } from 'uuid'

export const ExampleUser: User = {
  id: v4(),
  email: 'example@acter.global',
  createdAt: new Date(0),
  updatedAt: new Date(0),
}
