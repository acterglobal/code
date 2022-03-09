import { InterestType } from '@acter/schema'
import { Interests } from '@acter/schema/fixtures'

export type ExampleInterestParamsUrqlReturn = {
  data: {
    interestTypes: InterestType[]
  }
}

export const withExampleInterestParams = {
  urql: (): ExampleInterestParamsUrqlReturn => ({
    data: { interestTypes: Interests.data.interestTypes },
  }),
}
