import { mapFollowersByType } from '@acter/lib/acter/map-followers-by-type'
import {
  ExampleActer,
  ExampleActerConnection,
  OrganisationActerType,
  NetworkActerType,
} from '@acter/schema/fixtures'

describe('mapFollowersByType', () => {
  it('should fail gracefully when the provided Acter is not following anyone', () => {
    const acter = {
      ...ExampleActer,
      Following: null,
    }

    const mapped = mapFollowersByType(acter)
    expect(mapped).toStrictEqual({})
  })

  it('should return a map of acters without users by type', () => {
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
    expect(mapped.acters).toHaveLength(3)
    expect(mapped.foo).toBeFalsy()
  })
})
