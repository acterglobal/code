import { Acter } from '@generated/type-graphql'
import { v4 } from 'uuid'

import { ExampleOrganizationType } from 'src/__fixtures__/acter-type/example-organization'

export const ExampleActer: Acter = {
  id: v4(),
  acterTypeId: ExampleOrganizationType.id,
  name: 'My Organization',
  slug: 'my-organization',
}
