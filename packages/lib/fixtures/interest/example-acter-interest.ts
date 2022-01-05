import { ExampleActer } from '../acter/example-acter'
import { ExampleUser } from '../user/example-user'
import { ExampleInterest } from './example-interests'

import { ActerInterest } from '@acter/schema'

export const ExampleActerInterest: ActerInterest = {
  id: 'c8855968-f1d7-4340-a54f-3ea6f16152d6',
  createdAt: new Date(),
  updatedAt: new Date(),
  createdByUserId: ExampleUser.id,
  CreatedByUser: ExampleUser,
  acterId: ExampleActer.id,
  Acter: ExampleActer,
  interestId: ExampleInterest.id,
  Interest: ExampleInterest,
}
