import { v4 } from 'uuid'
import { Acter } from '@generated/type-graphql'
import {
  ExampleActer,
  GroupActerType,
  NetworkActerType,
  OrganizationActerType,
} from 'src/__fixtures__'

export const ExampleActerList: Acter[] = [
  {
    ...ExampleActer,
    id: v4(),
    name: 'Organization 1',
    slug: 'organization-1',
    ActerType: OrganizationActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'Network 1',
    slug: 'network-1',
    ActerType: NetworkActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'Group 1',
    slug: 'group-1',
    ActerType: GroupActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'Organization 2',
    slug: 'organization-2',
    ActerType: OrganizationActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'Network 2',
    slug: 'network-2',
    ActerType: NetworkActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'Group 2',
    slug: 'group-2',
    ActerType: GroupActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'Organization 3',
    slug: 'organization-3',
    ActerType: OrganizationActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'Network 3',
    slug: 'network-3',
    ActerType: NetworkActerType,
  },
  {
    ...ExampleActer,
    id: v4(),
    name: 'Group 3',
    slug: 'group-3',
    ActerType: GroupActerType,
  },
]
