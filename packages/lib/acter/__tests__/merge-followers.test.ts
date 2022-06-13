import { mergeFollowers } from '@acter/lib/acter/merge-followers'
import { Acter } from '@acter/schema'
import { ExampleActer } from '@acter/schema/fixtures'

describe('mergeFollowers', () => {
  it.skip('should return a combined array of followers with no duplicates', () => {
    const follower1: Acter = {
      ...ExampleActer,
      name: 'org-1',
      id: '6ac845b5-3136-4b4b-9c61-ea241beb4b31',
    }

    const follower2: Acter = {
      ...ExampleActer,
      name: 'org-2',
      id: '6ac845b5-3136-4b4b-9c61-ea241beb4b32',
    }

    const follower3: Acter = {
      ...ExampleActer,
      name: 'org-3',
      id: '6ac845b5-3136-4b4b-9c61-ea241beb4b33',
    }

    const filteredPotentialFollowers: Acter[] = [
      follower1,
      follower2,
      follower3,
    ]

    const follower4: Acter = {
      ...ExampleActer,
      name: 'org-2',
      id: '6ac845b5-3136-4b4b-9c61-ea241beb4b32',
    }

    const follower5: Acter = {
      ...ExampleActer,
      name: 'org-5',
      id: '6ac845b5-3136-4b4b-9c61-ea241beb4b35',
    }

    const followers: Acter[] = [follower4, follower5]

    expect(mergeFollowers(filteredPotentialFollowers, followers)).toBe([
      follower1,
      follower2,
      follower3,
      follower4,
      follower5,
    ])
  })
})
