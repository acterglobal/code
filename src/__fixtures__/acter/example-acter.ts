import { Acter } from '@schema'
import {
  ActivityActerType,
  ExampleActivity,
  ExampleUser,
  OrganisationActerType,
  UserActerType,
} from 'src/__fixtures__'

// import { ExampleActivity } from 'src/__fixtures__/activity/example-activity'

export const ExampleActer: Acter = {
  id: '9a64149c-5641-4841-96b1-1b2ec85f88aa',
  acterTypeId: OrganisationActerType.id,
  ActerType: OrganisationActerType,
  name: 'Greenlight Aarhus',
  location: 'Aarhus Denmark',
  slug: 'my-organisation',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Quam laudantium quas voluptates assumenda deserunt, sequi
  alias veritatis vitae eum culpa amet delectus eveniet tempore
  quibusdam repellat ut? Corrupti, consequuntur ipsam`,
  url: 'company url',
  avatarUrl: ``,
  bannerUrl: ``,
  createdAt: new Date(),
  updatedAt: new Date(),
  createdByUserId: ExampleUser.id,
  useAdmins: false,
}

export const ExampleUserActer: Acter = {
  id: '9a64149c-5641-4841-96b1-1b2ec85f87ba',
  acterTypeId: UserActerType.id,
  ActerType: UserActerType,
  name: 'Malik Shaik',
  location: 'Aarhus Denmark',
  slug: 'my-organisation',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Quam laudantium quas voluptates assumenda deserunt, sequi
  alias veritatis vitae eum culpa amet delectus eveniet tempore
  quibusdam repellat ut? Corrupti, consequuntur ipsam`,
  url: 'company url',
  avatarUrl: `https://res.cloudinary.com/dfglnmgmx/image/upload/v1612778108/acter/acter-logo-144.png`,
  bannerUrl: `https://res.cloudinary.com/dfglnmgmx/image/upload/v1612781078/acter/top-banner.png`,
  createdAt: new Date(),
  updatedAt: new Date(),
  createdByUserId: ExampleUser.id,
  useAdmins: false,
}

export const ExampleOrganisationActer: Acter = {
  id: '9a64149c-5641-4841-96b1-1b2ec85f98aj',
  acterTypeId: OrganisationActerType.id,
  ActerType: OrganisationActerType,
  name: 'Greenlight Aarhus',
  location: 'Aarhus Denmark',
  slug: 'my-organisation',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Quam laudantium quas voluptates assumenda deserunt, sequi
  alias veritatis vitae eum culpa amet delectus eveniet tempore
  quibusdam repellat ut? Corrupti, consequuntur ipsam`,
  url: 'company url',
  avatarUrl: `https://res.cloudinary.com/dfglnmgmx/image/upload/v1612778108/acter/acter-logo-144.png`,
  bannerUrl: `https://res.cloudinary.com/dfglnmgmx/image/upload/v1612781078/acter/top-banner.png`,
  createdAt: new Date(),
  updatedAt: new Date(),
  createdByUserId: ExampleUser.id,
  useAdmins: false,
}

export const ExampleActivityActer: Acter = {
  id: '9a64149c-5641-4841-96b1-1b2ec85f98aj',
  acterTypeId: ActivityActerType.id,
  ActerType: ActivityActerType,
  name: 'Greenlight Aarhus',
  location: 'Aarhus Denmark',
  slug: 'my-organisation',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Quam laudantium quas voluptates assumenda deserunt, sequi
  alias veritatis vitae eum culpa amet delectus eveniet tempore
  quibusdam repellat ut? Corrupti, consequuntur ipsam`,
  url: 'company url',
  avatarUrl: `https://res.cloudinary.com/dfglnmgmx/image/upload/v1612778108/acter/acter-logo-144.png`,
  bannerUrl: `https://res.cloudinary.com/dfglnmgmx/image/upload/v1612781078/acter/top-banner.png`,
  createdAt: new Date(),
  updatedAt: new Date(),
  createdByUserId: ExampleUser.id,
  useAdmins: false,
  Activity: ExampleActivity,
}
