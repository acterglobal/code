import { v4 } from 'uuid'
import { Acter } from '@generated/type-graphql'
import {
  ExampleActer,
  GroupActerType,
  NetworkActerType,
  OrganisationActerType,
} from 'src/__fixtures__'

export const ExampleActerList: Acter[] = [
  {
    ...ExampleActer,
    id: v4(),
    name: 'Organisation 1',
    slug: 'organisation-1',
    ActerType: OrganisationActerType,
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
    name: 'Organisation 2',
    slug: 'organisation-2',
    ActerType: OrganisationActerType,
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
    name: 'Organisation 3',
    slug: 'organisation-3',
    ActerType: OrganisationActerType,
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
