import { mapFollowersByType } from '@acter/lib/acter/map-followers-by-type'
import {
  ExampleActer,
  ExampleActerConnection,
  OrganisationActerType,
  NetworkActerType,
} from 'src/__fixtures__'

describe('mapFollowersByType', () => {
  it('should fail gracefully when the provided Acter is not following anyone', () => {
    const acter = {
      ...ExampleActer,
      Following: null,
    }

    const mapped = mapFollowersByType(acter)
    expect(mapped).toStrictEqual({})
  })

  it('should return a map of acters by type', () => {
    const acter = {
      ...ExampleActer,
      Followers: [
        // 2 Organisations
        {
          ...ExampleActerConnection,
          Follower: {
            ...ExampleActer,
            name: 'organisation1',
            ActerType: OrganisationActerType,
          },
        },
        {
          ...ExampleActerConnection,
          Follower: {
            ...ExampleActer,
            name: 'organisation2',
            ActerType: OrganisationActerType,
          },
        },
        // 1 Network
        {
          ...ExampleActerConnection,
          Follower: {
            ...ExampleActer,
            name: 'network1',
            ActerType: NetworkActerType,
          },
        },
      ],
    }

    const mapped = mapFollowersByType(acter)
    expect(mapped.organisation).toHaveLength(2)
    expect(mapped.network).toHaveLength(1)
    expect(mapped.foo).toBeFalsy()
  })
})
