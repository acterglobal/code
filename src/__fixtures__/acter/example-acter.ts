import { Acter } from '@generated/type-graphql'

import { OrganizationActerType } from 'src/__fixtures__/acter-type/organization'
import { ExampleUser } from '__fixtures__'

export const ExampleActer: Acter = {
  id: '9a64149c-5641-4841-96b1-1b2ec85f88aa',
  acterTypeId: OrganizationActerType.id,
  name: 'My Organization',
  slug: 'my-organization',
  createdAt: new Date(),
  updatedAt: new Date(),
  createdByUserId: ExampleUser.id,
  autoApproveFollowers: true,
}
