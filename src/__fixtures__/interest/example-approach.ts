import { Interest } from '@generated/type-graphql'

import { ExampleApproachType } from 'src/__fixtures__/interest/example-interest-type'

export const ExampleApproach: Interest = {
  id: 'f4d489a7-5744-4d4f-8893-3647b77a5a58',
  interestTypeId: ExampleApproachType.id, //  this is telling it, it is an Approach
  name: 'Example Approach',
  selected: false,
}
