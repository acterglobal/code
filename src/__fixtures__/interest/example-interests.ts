import { ExampleInterestType } from './example-interest-type'
import { Interest } from '@acter/schema/types'

export const ExampleInterest = {
  id: 'f3e100fc-4445-44db-a32a-430990dddbee',
  name: 'Example Interest',
  InterestType: ExampleInterestType,
  interestTypeId: ExampleInterestType.id,
} as Interest
