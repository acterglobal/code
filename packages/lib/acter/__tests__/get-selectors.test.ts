import { getSelectors } from '@acter/lib/acter/get-selectors'
import { MemberType } from '@acter/lib/constants'
import {
  ExampleActer,
  ExampleUserActer,
  ExampleActerConnection,
  UserActerType,
  OrganisationActerType,
  NetworkActerType,
} from '@acter/schema/fixtures'

const { PEOPLE, ACTERS } = MemberType

describe('getSelectors', () => {
  it('should return PEOPLE & ACTERS selectors because acter has both user & acter type followers', () => {
    const acter = {
      ...ExampleActer,
      Followers: [
        // 1 People
        {
          ...ExampleActerConnection,
          Follower: {
            ...ExampleUserActer,
            name: 'user1',
            ActerType: UserActerType,
          },
        },
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

    const selectors = getSelectors(acter)
    expect(selectors).toHaveLength(2)
    expect(selectors).toStrictEqual([PEOPLE, ACTERS])
  })

  it('should return only the selector PEOPLE because has only user type followers', () => {
    const acter = {
      ...ExampleActer,
      Followers: [
        // People
        {
          ...ExampleActerConnection,
          Follower: {
            ...ExampleUserActer,
            name: 'user1',
            ActerType: UserActerType,
          },
        },
        {
          ...ExampleActerConnection,
          Follower: {
            ...ExampleUserActer,
            name: 'user2',
            ActerType: UserActerType,
          },
        },
      ],
    }

    const selectors = getSelectors(acter)
    expect(selectors).toHaveLength(1)
    expect(selectors).toStrictEqual([PEOPLE])
  })
})
