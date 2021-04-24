import {
  ExampleUser,
  ExampleActer,
  ExampleActivityActer,
} from 'src/__fixtures__'

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
  type: 'Project',
}
