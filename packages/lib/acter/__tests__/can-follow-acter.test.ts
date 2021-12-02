import { canFollowActer } from '@acter/lib/acter/can-follow-acter'
import {
  ExampleActer,
  ExampleActivity,
  ExampleActivityActer,
  ExampleNetworkActer,
  ExampleOrganisationActer,
  ExampleUserActer,
} from '@acter/schema/fixtures'

describe('canFollowActer', () => {
  it('should not allow an Acter to follow itself', () => {
    expect(canFollowActer(ExampleActer)(ExampleActer)).toBeFalsy()
  })

  it('should not allow an activity organizer to follow, as it is already the organiser', () => {
    const activity = {
      ...ExampleActivityActer,
      Activity: {
        ...ExampleActivity,
        organiserId: ExampleActer.id,
      },
    }
    expect(canFollowActer(activity)(ExampleActer)).toBe(false)
  })

  it('should not allow Activities to follow anything', () => {
    expect(canFollowActer(ExampleActer)(ExampleActivityActer)).toBe(false)
    expect(canFollowActer(ExampleOrganisationActer)(ExampleActivityActer)).toBe(
      false
    )
    expect(canFollowActer(ExampleNetworkActer)(ExampleActivityActer)).toBe(
      false
    )
  })

  it('should allow Users to connect to anything', () => {
    const activityActer = {
      ...ExampleActivityActer,
      Activity: {
        ...ExampleActivity,
        organiserId: ExampleOrganisationActer.id,
      },
    }
    expect(canFollowActer(activityActer)(ExampleUserActer)).toBe(true)
    expect(canFollowActer(ExampleOrganisationActer)(ExampleUserActer)).toBe(
      true
    )
    expect(canFollowActer(ExampleNetworkActer)(ExampleUserActer)).toBe(true)
  })

  it('should allow "standard" ActerTypes to follow each other', () => {
    expect(canFollowActer(ExampleActer)(ExampleNetworkActer)).toBe(true)
    expect(canFollowActer(ExampleOrganisationActer)(ExampleActivityActer)).toBe(
      false
    )
    expect(canFollowActer(ExampleNetworkActer)(ExampleActivityActer)).toBe(
      false
    )
    expect(canFollowActer(ExampleNetworkActer)(ExampleOrganisationActer)).toBe(
      true
    )
  })
})
