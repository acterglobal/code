import { Acter, ActerJoinSettings } from '@schema'
import {
  ExampleUser,
  OrganisationActerType,
  NetworkActerType,
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
  acterJoinSetting: ActerJoinSettings.EVERYONE,
}

export const ExampleUserActer: Acter = {
  id: '3bc33730-82f4-443b-aa03-e0be78ac75a4',
  ...ExampleActer,
  acterTypeId: UserActerType.id,
  ActerType: UserActerType,
  name: 'Malik Shaik',
  location: 'Aarhus Denmark',
  slug: 'my-organisation',
}

export const ExampleOrganisationActer: Acter = {
  ...ExampleActer,
  id: 'a581beb4-1e04-48c3-9a4f-4608e74d7cab',
  acterTypeId: OrganisationActerType.id,
  ActerType: OrganisationActerType,
  name: 'Greenlight Aarhus',
  location: 'Aarhus Denmark',
  slug: 'my-organisation',
}

export const ExampleNetworkActer: Acter = {
  ...ExampleActer,
  id: '1455eafd-9351-4695-9750-d4ff02bc2ec8',
  acterTypeId: NetworkActerType.id,
  ActerType: NetworkActerType,
  name: 'Aarhus Kommune',
  location: 'Aarhus Denmark',
  slug: 'my-network',
}

export const ExampleActivityActer: Acter = {
  ...ExampleActer,
  id: '55cb6a89-b433-45c1-ad0a-6036f51a5390',
  acterTypeId: ActivityActerType.id,
  ActerType: ActivityActerType,
  name: 'Greenlight Aarhus',
  location: 'Aarhus Denmark',
  slug: 'greenlight-aarhus',
}
