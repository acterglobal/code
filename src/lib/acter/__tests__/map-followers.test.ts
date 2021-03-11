import { mapFollowers } from 'src/lib/acter/map-followers'
import {
  ExampleActer,
  ExampleActerConnection,
  OrganisationActerType,
  NetworkActerType,
} from 'src/__fixtures__'

describe('mapFollowers', () => {
  it('should fail gracefully when the provided Acter is not following anyone', () => {
    const acter = {
      ...ExampleActer,
      Following: null,
    }

    const mapped = mapFollowers(acter)
    expect(mapped).toStrictEqual({})
  })

  it('should return a map of acters by type', () => {
    const acter = {
      ...ExampleActer,
      Following: [
        // 2 Organisations
        {
          ...ExampleActerConnection,
          Following: {
            ...ExampleActer,
            name: 'organisation1',
            ActerType: OrganisationActerType,
          },
        },
        {
          ...ExampleActerConnection,
          Following: {
            ...ExampleActer,
            name: 'organisation2',
            ActerType: OrganisationActerType,
          },
        },
        // 1 Network
        {
          ...ExampleActerConnection,
          Following: {
            ...ExampleActer,
            name: 'network1',
            ActerType: NetworkActerType,
          },
        },
      ],
    }

    const mapped = mapFollowers(acter)
    expect(mapped.organisation).toHaveLength(2)
    expect(mapped.network).toHaveLength(1)
    expect(mapped.foo).toBeFalsy()
  })
})
