import { Meta, Story } from '@storybook/react'

import { add } from 'date-fns'

import {
  ActivityTile,
  ActivityTileProps,
} from '@acter/components/activity/tile'
import { Activity } from '@acter/schema'
import { ExampleActer } from '@acter/schema/fixtures'
import {
  ExampleActivity,
  IdeaTypeActivity,
  ProjectTypeActivity,
} from '@acter/schema/fixtures/activity/example-activity'

const startAt = new Date(2022, 5, 9, 12, 0, 0)
const activity: Activity = {
  ...ExampleActivity,
  startAt,
  endAt: add(startAt, { days: 10 }),
}

export default {
  title: 'Organisms/Activity/ActivityTile',
  component: ActivityTile,
  args: {
    activity,
  },
} as Meta

export const Template: Story<ActivityTileProps> = (args) => (
  <ActivityTile {...args} />
)

export const IdeaTile = Template.bind({})
IdeaTile.args = {
  activity: {
    ...IdeaTypeActivity,
    startAt,
    endAt: add(startAt, { days: 10 }),
  },
}

export const ProjectTile = Template.bind({})
ProjectTile.args = {
  activity: {
    ...ProjectTypeActivity,
    startAt,
    endAt: add(startAt, { days: 10 }),
  },
}

export const SmallContent = Template.bind({})
SmallContent.args = {
  activity: {
    ...activity,
    Acter: {
      ...ExampleActer,
      name: 'Small content',
    },
  },
}
export const MediumContent = Template.bind({})
MediumContent.args = {
  activity: {
    ...activity,
    Acter: {
      ...ExampleActer,
      name: 'Medium activity title goes here more',
    },
  },
}
export const LargeContent = Template.bind({})
LargeContent.args = {
  activity: {
    ...activity,
    Acter: {
      ...ExampleActer,
      name: 'Very very very very very long title for this activity content',
      location: 'Aarhus Jutland Denmark very long location',
    },

    isOnline: '',
  },
}
