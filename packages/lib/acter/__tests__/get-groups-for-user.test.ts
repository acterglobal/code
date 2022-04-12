import { v4 } from 'uuid'

import { getGroupsForUser } from '@acter/lib/acter/get-groups-for-user'
import {
  Acter,
  ActerConnectionRole,
  ActerPrivacySettings,
  User,
} from '@acter/schema'
import {
  ExampleActer,
  GroupActerType,
  ExampleUser,
  ExampleActerConnection,
  ExampleUserActer,
  ActivityActerType,
} from '@acter/schema/fixtures'

const { ADMIN, MEMBER } = ActerConnectionRole

describe('getGroupsForUser', () => {
  it('should return 0 groups when checking for user groups', () => {
    const activity1: Acter = {
      ...ExampleActer,
      id: v4(),
      name: 'Activity 1',
      slug: 'activity-1',
      ActerType: ActivityActerType,
      acterPrivacySetting: ActerPrivacySettings.PUBLIC,
      deletedAt: null,
    }

    const activity2: Acter = {
      ...ExampleActer,
      id: v4(),
      name: 'Activity 2',
      slug: 'activity-2',
      ActerType: ActivityActerType,
      acterPrivacySetting: ActerPrivacySettings.PUBLIC,
      deletedAt: null,
    }

    const acter1: Acter = {
      ...ExampleActer,
      Children: [{ ...activity1 }, { ...activity2 }],
      Followers: [
        {
          ...ExampleActerConnection,
          followerActerId: ExampleUserActer.id,
          followingActerId: ExampleActer.id,
          createdByUserId: ExampleUserActer.id,
          role: ADMIN,
          Follower: { ...ExampleUserActer },
        },
      ],
    }

    const user1: User = {
      ...ExampleUser,
      Acter: {
        ...ExampleUserActer,
        Following: [
          {
            ...ExampleActerConnection,
            role: ADMIN,
            Following: activity1,
          },
          {
            ...ExampleActerConnection,
            role: ADMIN,
            Following: activity2,
          },
        ],
      },
    }

    const groupList = getGroupsForUser(acter1, user1)
    expect(groupList).toHaveLength(0)
  })

  it('should return only 1 group because user is only member of one private group belonging to acter', () => {
    const privateGroup1: Acter = {
      ...ExampleActer,
      id: v4(),
      name: 'Private Group 1',
      slug: 'private-group-1',
      ActerType: GroupActerType,
      acterPrivacySetting: ActerPrivacySettings.PRIVATE,
      deletedAt: null,
    }

    const privateGroup2: Acter = {
      ...ExampleActer,
      id: v4(),
      name: 'Private Group 2',
      slug: 'private-group-2',
      ActerType: GroupActerType,
      acterPrivacySetting: ActerPrivacySettings.PRIVATE,
      deletedAt: null,
    }

    const acter1: Acter = {
      ...ExampleActer,
      Children: [{ ...privateGroup1 }, { ...privateGroup2 }],
      Followers: [
        {
          ...ExampleActerConnection,
          followerActerId: ExampleUserActer.id,
          followingActerId: ExampleActer.id,
          createdByUserId: ExampleUserActer.id,
          role: ADMIN,
          Follower: { ...ExampleUserActer },
        },
      ],
    }

    const user1: User = {
      ...ExampleUser,
      Acter: {
        ...ExampleUserActer,
        Following: [
          {
            ...ExampleActerConnection,
            role: MEMBER,
            Following: privateGroup1,
          },
        ],
      },
    }
    const groupList = getGroupsForUser(acter1, user1)
    expect(groupList).toHaveLength(1)
  })

  it('should return 2 groups because there are 2 public groups in the acter', () => {
    const publicGroup1: Acter = {
      ...ExampleActer,
      id: v4(),
      name: 'Public Group 1',
      slug: 'public-group-1',
      ActerType: GroupActerType,
      acterPrivacySetting: ActerPrivacySettings.PUBLIC,
      deletedAt: null,
    }

    const publicGroup2: Acter = {
      ...ExampleActer,
      id: v4(),
      name: 'Public Group 2',
      slug: 'public-group-2',
      ActerType: GroupActerType,
      acterPrivacySetting: ActerPrivacySettings.PUBLIC,
      deletedAt: null,
    }

    const acter1: Acter = {
      ...ExampleActer,
      Children: [{ ...publicGroup1 }, { ...publicGroup2 }],
      Followers: [
        {
          ...ExampleActerConnection,
          followerActerId: ExampleUserActer.id,
          followingActerId: ExampleActer.id,
          createdByUserId: ExampleUserActer.id,
          role: ADMIN,
          Follower: { ...ExampleUserActer },
        },
      ],
    }

    const user1: User = {
      ...ExampleUser,
      Acter: {
        ...ExampleUserActer,
      },
    }
    const groupList = getGroupsForUser(acter1, user1)
    expect(groupList).toHaveLength(2)
  })

  it('should return 3 public groups & 1 private group the user is a member of belonging to that acter', () => {
    const publicGroup1: Acter = {
      ...ExampleActer,
      id: v4(),
      name: 'Public Group 1',
      slug: 'public-group-1',
      ActerType: GroupActerType,
      acterPrivacySetting: ActerPrivacySettings.PUBLIC,
      deletedAt: null,
    }

    const publicGroup2: Acter = {
      ...ExampleActer,
      id: v4(),
      name: 'Public Group 2',
      slug: 'public-group-2',
      ActerType: GroupActerType,
      acterPrivacySetting: ActerPrivacySettings.PUBLIC,
      deletedAt: null,
    }

    const privateGroup1: Acter = {
      ...ExampleActer,
      id: v4(),
      name: 'Private Group 1',
      slug: 'private-group-1',
      ActerType: GroupActerType,
      acterPrivacySetting: ActerPrivacySettings.PRIVATE,
      deletedAt: null,
    }

    const privateGroup2: Acter = {
      ...ExampleActer,
      id: v4(),
      name: 'Private Group 2',
      slug: 'private-group-2',
      ActerType: GroupActerType,
      acterPrivacySetting: ActerPrivacySettings.PRIVATE,
      deletedAt: null,
    }

    const activity1: Acter = {
      ...ExampleActer,
      id: v4(),
      name: 'Activity 1',
      slug: 'activity-1',
      ActerType: ActivityActerType,
      acterPrivacySetting: ActerPrivacySettings.PUBLIC,
      deletedAt: null,
    }

    const acter1: Acter = {
      ...ExampleActer,
      Children: [
        { ...publicGroup1 },
        { ...publicGroup2 },
        { ...privateGroup1 },
        { ...privateGroup2 },
        { ...activity1 },
      ],
      Followers: [
        {
          ...ExampleActerConnection,
          followerActerId: ExampleUserActer.id,
          followingActerId: ExampleActer.id,
          createdByUserId: ExampleUserActer.id,
          role: ADMIN,
          Follower: { ...ExampleUserActer },
        },
      ],
    }

    const user1: User = {
      ...ExampleUser,
      Acter: {
        ...ExampleUserActer,
        Following: [
          {
            ...ExampleActerConnection,
            role: ADMIN,
            Following: publicGroup1,
          },
          {
            ...ExampleActerConnection,
            role: ADMIN,
            Following: publicGroup2,
          },
          {
            ...ExampleActerConnection,
            role: MEMBER,
            Following: privateGroup1,
          },
        ],
      },
    }
    const groupList = getGroupsForUser(acter1, user1)
    expect(groupList).toHaveLength(3)
  })
})
