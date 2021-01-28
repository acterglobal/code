import { Interest } from '@generated/type-graphql'

import { ExampleFocusType } from 'src/__fixtures__/interest/example-interest-type'

export const ExampleFocus: Interest = {
  id: '71a92416-a65f-41f1-b4ec-e81012325cd8',
  interestTypeId: ExampleFocusType.id,
  name: 'Example Focus',
  selected: false,
}
