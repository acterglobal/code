import { Meta, Story } from '@storybook/react'
import { ActivityTile, ActivityTileProps } from 'src/components/activity/tile'
import { ExampleActivity } from 'src/__fixtures__/activity/example-activity'

export default {
  title: 'landingpage/ActivityTile',
  component: ActivityTile,
  args: {
    activity: ExampleActivity,
  },
} as Meta

export const Tile: Story<ActivityTileProps> = (args) => (
  <ActivityTile {...args} />
)
