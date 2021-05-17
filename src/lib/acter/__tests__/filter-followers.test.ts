import { filterFollowers } from 'src/lib/acter/filter-followers'
import {
  ExampleActer,
  ExampleActivity,
  ExampleActivityActer,
  ExampleNetworkActer,
  ExampleOrganisationActer,
  ExampleUserActer,
  OrganisationActerType,
} from 'src/__fixtures__'

describe('filterFollowers', () => {
  it('should not allow an Acter to follow itself', () => {
    expect(filterFollowers(ExampleActer)(ExampleActer)).toBeFalsy()
  })

  it('should not allow an activity organizer to follow, as it is already the organiser', () => {
    const activity = {
      ...ExampleActivityActer,
      Activity: {
        ...ExampleActivity,
        organiserId: ExampleActer.id,
      },
    }
    expect(filterFollowers(activity)(ExampleActer)).toBe(false)
  })

  it('should not allow Activities to follow anything', () => {
    expect(filterFollowers(ExampleActer)(ExampleActivityActer)).toBe(false)
    expect(
      filterFollowers(ExampleOrganisationActer)(ExampleActivityActer)
    ).toBe(false)
    expect(filterFollowers(ExampleNetworkActer)(ExampleActivityActer)).toBe(
      false
    )
  })

  it('should not allow Networks to follow anything', () => {
    expect(filterFollowers(ExampleActer)(ExampleNetworkActer)).toBe(false)
    expect(
      filterFollowers(ExampleOrganisationActer)(ExampleActivityActer)
    ).toBe(false)
    expect(filterFollowers(ExampleNetworkActer)(ExampleActivityActer)).toBe(
      false
    )
  })

  it('should only allow Organisations to connect to Networks', () => {
    expect(filterFollowers(ExampleNetworkActer)(ExampleOrganisationActer)).toBe(
      true
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
    expect(filterFollowers(activityActer)(ExampleUserActer)).toBe(true)
    expect(filterFollowers(ExampleOrganisationActer)(ExampleUserActer)).toBe(
      true
    )
    expect(filterFollowers(ExampleNetworkActer)(ExampleUserActer)).toBe(true)
  })

  it('should reject by default', () => {
    const weirdActerType = {
      ...ExampleActer,
      ActerType: {
        ...OrganisationActerType,
        name: 'foo',
      },
    }
    expect(filterFollowers(ExampleNetworkActer)(weirdActerType)).toBe(false)
  })
})
