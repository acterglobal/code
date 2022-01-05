import { Meta, Story } from '@storybook/react'

import { add } from 'date-fns'

import {
  ActivityTile,
  ActivityTileProps,
} from '@acter/components/activity/tile'
import { ExampleActer } from '@acter/lib/fixtures'
import {
  ExampleActivity,
  IdeaTypeActivity,
  ProjectTypeActivity,
} from '@acter/lib/fixtures/activity/example-activity'

export default {
  title: 'Organisms/Activity/ActivityTile',
  component: ActivityTile,
  args: {
    activity: ExampleActivity,
  },
} as Meta

export const Template: Story<ActivityTileProps> = (args) => (
  <ActivityTile {...args} />
)

export const IdeaTile = Template.bind({})
IdeaTile.args = {
  activity: IdeaTypeActivity,
}

export const ProjectTile = Template.bind({})
ProjectTile.args = {
  activity: ProjectTypeActivity,
}

export const SmallContent = Template.bind({})
SmallContent.args = {
  activity: {
    ...ExampleActivity,
    endAt: add(new Date(), { days: 10 }),
    Acter: {
      ...ExampleActer,
      name: 'Small content',
    },
  },
}
export const MediumContent = Template.bind({})
MediumContent.args = {
  activity: {
    ...ExampleActivity,
    Acter: {
      ...ExampleActer,
      name: 'Medium activity title goes here more',
    },
  },
}
export const LargeContent = Template.bind({})
LargeContent.args = {
  activity: {
    ...ExampleActivity,
    Acter: {
      ...ExampleActer,
      name: 'Very very very very very long title for this activity content',
      location: 'Aarhus Jutland Denmark very long location',
    },

    isOnline: '',
  },
}
