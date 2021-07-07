import { v4 } from 'uuid'
import { Acter } from '@acter/schema/types'
import {
  ExampleActer,
  GroupActerType,
  NetworkActerType,
  OrganisationActerType,
} from '@acter/schema/fixtures'

export const ExampleActerList: Acter[] = [
  {
    ...ExampleActer,
    id: v4(),
    name: 'organisation 1',
    slug: 'organisation-1',
    ActerType: OrganisationActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'network 1',
    slug: 'network-1',
    ActerType: NetworkActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'group 1',
    slug: 'group-1',
    ActerType: GroupActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'organisation 2',
    slug: 'organisation-2',
    ActerType: OrganisationActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'network 2',
    slug: 'network-2',
    ActerType: NetworkActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'group 2',
    slug: 'group-2',
    ActerType: GroupActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'organisation 3',
    slug: 'organisation-3',
    ActerType: OrganisationActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'network 3',
    slug: 'network-3',
    ActerType: NetworkActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'group 3',
    slug: 'group-3',
    ActerType: GroupActerType,
  },
]
