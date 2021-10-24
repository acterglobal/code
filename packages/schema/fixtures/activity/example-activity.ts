import { ExampleActer } from '../acter/example-acter'

import { Activity } from '@acter/schema'
import {
  ExampleUser,
  ExampleActivityActer,
  EventActivityType,
  IdeaActivityType,
  ProjectActivityType,
} from '@acter/schema/fixtures'

export const ExampleActivity: Activity = {
  id: '18869756-4979-4adb-b967-5cf7ca70b01a',
  startAt: new Date(),
  endAt: new Date(),
  isAllDay: false,
  isOnline: true,
  createdByUserId: ExampleUser.id,
  createdAt: new Date(),
  updatedAt: new Date(),
  Acter: {
    ...ExampleActivityActer,
    name: 'New test Activity',
  },
  activityTypeId: EventActivityType.id,
  ActivityType: EventActivityType,
  organiserId: ExampleActer.id,
  Organiser: ExampleActer,
}

export const ProjectTypeActivity: Activity = {
  ...ExampleActivity,
  Acter: {
    ...ExampleActivityActer,
    name: 'Project Activity',
  },
  activityTypeId: ProjectActivityType.id,
  ActivityType: ProjectActivityType,
}

export const IdeaTypeActivity: Activity = {
  ...ExampleActivity,
  Acter: {
    ...ExampleActivityActer,
    name: 'Idea type Activity',
  },
  activityTypeId: IdeaActivityType.id,
  ActivityType: IdeaActivityType,
}
