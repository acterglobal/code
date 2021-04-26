import { Meta, Story } from '@storybook/react'
import { ActivityTile, ActivityTileProps } from 'src/components/activity/tile'
import {
  ExampleActivity,
  IdeaTypeActivity,
  ProjectTypeActivity,
} from 'src/__fixtures__/activity/example-activity'

export default {
  title: 'landingpage/ActivityTile',
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
