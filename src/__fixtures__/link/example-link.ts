import { Link } from '@acter/schema/types'

import { ExampleUser, ExampleActer } from 'src/__fixtures__'

export const ExampleLink: Link[] = [
  {
    id: '7757714c-f537-466c-86df-fdc5b74b56ee',
    name: 'Google',
    url: 'https://www.google.com',
    createdAt: new Date(),
    updatedAt: new Date(),

    Acter: ExampleActer,
    acterId: ExampleActer.id,

    createdByUser: ExampleUser,
    createdByUserId: ExampleUser.id,
  },
  {
    id: '8757714c-f537-466c-86df-fdc5b74b56ee',
    name: 'Facebook',
    url: 'https://www.facebook.com',
    createdAt: new Date(),
    updatedAt: new Date(),

    Acter: ExampleActer,
    acterId: ExampleActer.id,

    createdByUser: ExampleUser,
    createdByUserId: ExampleUser.id,
  },
]
