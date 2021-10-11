import {
  _getFollowedActivitiesMap,
  _addMissingOrganisedActivities,
  sortActivitiesByStartAt,
  getActivitiesAfterDate,
  getActivitiesForActerByStartAt,
} from '../get-activities-for-acter'
import { add, sub } from 'date-fns'

import { Acter, ActerConnection, Activity } from '@acter/schema'
import {
  ExampleActer,
  ExampleActerConnection,
  ExampleActivity,
  ExampleActivityActer,
} from '@acter/schema/fixtures'

describe('getActivitiesForActer', () => {
  const now = new Date()

  const activity1: Activity = {
    ...ExampleActivity,
    Acter: {
      ...ExampleActer,
      name: 'activity1',
    },
    id: '7be9ed48-99dc-4d9a-ac1b-013d9f0e60c4',
    startAt: sub(now, { days: 1 }),
    endAt: sub(now, { days: 1 }),
  }
  const activity2: Activity = {
    ...ExampleActivity,
    Acter: {
      ...ExampleActer,
      name: 'activity2',
    },
    id: '078dd9f0-a12f-4eaa-a7f9-34383454cef8',
    startAt: add(now, { days: 1 }),
    endAt: add(now, { days: 1 }),
  }
  const activity3: Activity = {
    ...ExampleActivity,
    Acter: {
      ...ExampleActer,
      name: 'activity3',
    },
    id: '80a83f0b-057f-4041-b0f5-23d9dc88964a',
    startAt: add(now, { days: 2 }),
    endAt: add(now, { days: 2 }),
  }
  const followingActivity1: ActerConnection = {
    ...ExampleActerConnection,
    Following: {
      ...ExampleActivityActer,
      id: '4e3c9e01-3e8c-4d62-89ad-67ce58e374c2',
      Activity: activity1,
    },
  }
  const followingActivity2: ActerConnection = {
    ...ExampleActerConnection,
    Following: {
      ...ExampleActivityActer,
      id: '85318202-b3d4-49cb-a340-00767ab27db6',
      Activity: activity2,
    },
  }
  const followingSomethingElse: ActerConnection = {
    ...ExampleActerConnection,
    Following: {
      ...ExampleActer,
    },
  }
  const acter: Acter = {
    ...ExampleActer,
    Following: [
      followingActivity1,
      followingActivity2,
      followingActivity2,
      followingSomethingElse,
    ],
    ActivitiesOrganized: [activity2, activity3],
  }

  const followedMap = _getFollowedActivitiesMap(acter)
  const followedAndOrganisedMap = _addMissingOrganisedActivities(acter)(
    followedMap
  )

  const { allActivities, futureActivities } = getActivitiesForActerByStartAt(
    acter
  )

  describe('getActivitiesForActerByStartAt', () => {
    it('should return a list of all activities', () => {
      expect(allActivities).toEqual([activity1, activity2, activity3])
    })

    it('should return a list of activities in the future', () => {
      expect(futureActivities).toEqual([activity2, activity3])
    })
  })

  describe('_getFollowedActivitiesMap', () => {
    it('should generate a map of activities by id with no duplicates', () => {
      expect(followedMap).toEqual({
        [activity1.id]: activity1,
        [activity2.id]: activity2,
      })
    })
  })

  describe('_addMissingOrganisedActivities', () => {
    it('should add organised Activities to followed without duplicates', () => {
      expect(followedAndOrganisedMap).toEqual({
        [activity1.id]: activity1,
        [activity2.id]: activity2,
        [activity3.id]: activity3,
      })
    })
  })

  describe('sortActivitiesByStartAt', () => {
    it('should sort activities by start date', () => {
      expect(
        sortActivitiesByStartAt([activity2, activity3, activity1])
      ).toEqual([activity1, activity2, activity3])
    })
  })

  describe('getActivitiesAfterDate', () => {
    it('should return a list of Activities happening in the future', () => {
      expect(
        getActivitiesAfterDate(
          [activity1, activity2, activity3],
          add(activity1.startAt, { seconds: 1 })
        )
      ).toEqual([activity2, activity3])
    })
  })
})
