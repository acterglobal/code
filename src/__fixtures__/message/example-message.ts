import { Message } from '@schema'

import {
  ExampleUserActer,
  ExampleOrganisationActer,
} from '../acter/example-acter'

export const ExampleMessage: Message = {
  id: '7757714c-f537-466c-86df-fdc5b74b56ee',
  subject: 'Example Message',
  content: 'This is content',
  createdAt: new Date(),
  updatedAt: new Date(),

  Author: ExampleUserActer,
  authorId: ExampleUserActer.id,
  Acter: ExampleOrganisationActer,
  acterId: ExampleOrganisationActer.id,
}

export const ExampleSubMessage: Message = {
  id: 'd81402b8-10d1-4bf3-b37a-1261e3a7230a',
  subject: 'Example Sub Message',
  content: 'This is subcontent',
  createdAt: new Date(),
  updatedAt: new Date(),

  Author: ExampleUserActer,
  authorId: ExampleUserActer.id,
  Acter: ExampleOrganisationActer,
  acterId: ExampleOrganisationActer.id,
  Parent: ExampleMessage,
  parentId: ExampleMessage.id,
}
