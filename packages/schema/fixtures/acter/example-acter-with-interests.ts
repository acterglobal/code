import { v4 } from 'uuid'

import { Acter, ActerInterest, Interest } from '@acter/schema'

import { ExampleActer, ExampleActerInterest, Interests } from '../'

const selectedInterests = [
  ...Interests.data.interestTypes.slice(1).reduce<Interest[]>(
    (memo, type) => [
      ...memo,
      ...type.Interests.slice(0, 2).map((interest) => ({
        ...interest,
        InterestType: type,
      })),
    ],
    []
  ),
]

export const ExampleActerWithInterests: Acter = {
  ...ExampleActer,
  ActerInterests: selectedInterests.map(
    (interest) =>
      ({
        ...ExampleActerInterest,
        id: v4(),
        Interest: interest,
      } as ActerInterest)
  ),
}
