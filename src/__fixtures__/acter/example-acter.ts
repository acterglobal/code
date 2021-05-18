import { Acter, ActerJoinSettings } from '@schema'
import {
  ExampleUser,
  OrganisationActerType,
  UserActerType,
  ActivityActerType,
} from 'src/__fixtures__'

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
  avatarUrl: `https://acter-dev.imgix.net/assets/default-avatar.png`,
  bannerUrl: `https://acter-dev.imgix.net/assets/default-banner.png`,
  useAdmins: false,
  createdAt: new Date(),
  updatedAt: new Date(),
  createdByUserId: ExampleUser.id,
  Following: [],
  userJoinSetting: ActerJoinSettings.EVERYONE,
}

export const ExampleUserActer: Acter = {
  ...ExampleActer,
  acterTypeId: UserActerType.id,
  ActerType: UserActerType,
  name: 'Malik Shaik',
  location: 'Aarhus Denmark',
  slug: 'my-organisation',
}

export const ExampleOrganisationActer: Acter = {
  ...ExampleActer,
  acterTypeId: OrganisationActerType.id,
  ActerType: OrganisationActerType,
  name: 'Greenlight Aarhus',
  location: 'Aarhus Denmark',
  slug: 'my-organisation',
}

export const ExampleActivityActer: Acter = {
  ...ExampleActer,
  acterTypeId: ActivityActerType.id,
  ActerType: ActivityActerType,
  name: 'Greenlight Aarhus',
  location: 'Aarhus Denmark',
  slug: 'greenlight-aarhus',
}
