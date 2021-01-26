import { Acter } from '@generated/type-graphql'

import { ExampleOrganizationType } from 'src/__fixtures__/acter-type/example-organization'
import { ExampleUser } from '__fixtures__'

export const ExampleActer: Acter = {
  id: '9a64149c-5641-4841-96b1-1b2ec85f88aa',
  acterTypeId: ExampleOrganizationType.id,
  name: 'My Organization',
  slug: 'my-organization',
  createdAt: new Date(),
  updatedAt: new Date(),
  createdByUserId: ExampleUser.id,
}
