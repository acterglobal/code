import { Interest } from '@generated/type-graphql'

import { ExampleTagType } from 'src/__fixtures__/interest/example-interest-type'

export const ExampleTag: Interest = {
  id: '6d03b143-57e9-461e-aef8-c2c889a32ccb',
  interestTypeId: ExampleTagType.id,
  name: 'Example Tag',
  selected: false,
}
