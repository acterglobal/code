import {
  ExampleUser,
  ExampleActer,
  ExampleActivityActer,
  EventActivityType,
  IdeaActivityType,
  ProjectActivityType,
} from '@acter/schema/fixtures'

export const ExampleActivity = {
  id: '18869756-4979-4adb-b967-5cf7ca70b01a',
  name: 'New test Activity',
  startAt: new Date(),
  endAt: new Date(),
  isAllDay: false,
  isOnline: true,
  createdByUserId: ExampleUser.id,
  createdAt: new Date(),
  updatedAt: new Date(),
  Acter: ExampleActivityActer,
  Organiser: ExampleActer,
  ActivityType: EventActivityType,
  activityTypeId: EventActivityType.id,
}

export const ProjectTypeActivity = {
  id: '18869756-4979-4adb-b967-5cf7ca70b01a',
  name: 'Project Activity',
  startAt: new Date(),
  endAt: new Date(),
  isAllDay: false,
  isOnline: true,
  createdByUserId: ExampleUser.id,
  createdAt: new Date(),
  updatedAt: new Date(),
  Acter: ExampleActivityActer,
  Organiser: ExampleActer,
  ActivityType: ProjectActivityType,
  activityTypeId: ProjectActivityType.id,
}

export const IdeaTypeActivity = {
  id: '18869756-4979-4adb-b967-5cf7ca70b01a',
  name: 'Idea type Activity',
  startAt: new Date(),
  endAt: new Date(),
  isAllDay: false,
  isOnline: true,
  createdByUserId: ExampleUser.id,
  createdAt: new Date(),
  updatedAt: new Date(),
  Acter: ExampleActivityActer,
  Organiser: ExampleActer,
  ActivityType: IdeaActivityType,
  activityTypeId: IdeaActivityType.id,
}
