import { ActerType } from '@generated/type-graphql'
import { v4 } from 'uuid'

export const ExampleOrganizationType: ActerType = {
  id: v4(),
  name: 'Organization',
}
