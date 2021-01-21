import { ActerType } from '@generated/type-graphql'
import { v4 } from 'uuid'

export const ExampleGroupType: ActerType = {
  id: v4(),
  name: 'Group',
}
