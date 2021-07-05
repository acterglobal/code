import { excludeActerTypes } from 'src/lib/acter/exclude-acter-types'
import { ActerTypes } from 'src/constants'
import { ExampleOrganisationActer, ExampleUserActer } from 'src/__fixtures__'

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
