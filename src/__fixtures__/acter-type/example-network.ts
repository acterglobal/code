import { ActerType } from '@generated/type-graphql'
import { v4 } from 'uuid'

export const ExampleNetworkType: ActerType = {
  id: v4(),
  name: 'Network',
}
