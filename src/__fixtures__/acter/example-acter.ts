import { Acter } from '@generated/type-graphql'

import { OrganizationActerType } from 'src/__fixtures__/acter-type/organization'
import { ExampleUser } from '__fixtures__'

export const ExampleActer: Acter = {
  id: '9a64149c-5641-4841-96b1-1b2ec85f88aa',
  acterTypeId: OrganizationActerType.id,
  name: 'Greenlight Aarhus',
  location: 'Aarhus Denmark',
  slug: 'my-organization',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Quam laudantium quas voluptates assumenda deserunt, sequi
  alias veritatis vitae eum culpa amet delectus eveniet tempore
  quibusdam repellat ut? Corrupti, consequuntur ipsam`,
  url: 'image url or company url', // FIXME : is this image url ?
  createdAt: new Date(),
  updatedAt: new Date(),
  createdByUserId: ExampleUser.id,
  autoApproveFollowers: true,
}

export const getBannerImageUrl = () =>
  `https://res.cloudinary.com/dfglnmgmx/image/upload/v1612781078/acter/top-banner.png`

export const getAvtarImageUrl = () =>
  `https://res.cloudinary.com/dfglnmgmx/image/upload/v1612778108/acter/acter-logo-144.png`
