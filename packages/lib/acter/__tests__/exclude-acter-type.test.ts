import { excludeActerTypes } from '@acter/lib/acter/exclude-acter-types'
import { ActerTypes } from '@acter/lib/constants'
import { ExampleOrganisationActer, ExampleUserActer } from '@acter/lib/fixtures'

describe('excludeActerTypes', () => {
  it('should return a list of Acters excluding those listed in second parameter', () => {
    const acters = [ExampleOrganisationActer, ExampleUserActer]
    const actersWithoutActivitiesAndUsers = excludeActerTypes(acters, [
      ActerTypes.ACTIVITY,
      ActerTypes.USER,
    ])
    expect(actersWithoutActivitiesAndUsers).toStrictEqual([
      ExampleOrganisationActer,
    ])
  })
})
