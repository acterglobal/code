import { Story, Meta } from '@storybook/react'

import {
  ApproachList,
  ApproachListProps,
} from 'src/components/interests/approach-list'

import { ExampleApproach, ExampleApproachType } from 'src/__fixtures__'

export default {
  title: 'interests/ApproachList',
  component: ApproachList,
  args: {
    type: ExampleApproachType,
    approaches: [ExampleApproach, ExampleApproach, ExampleApproach],
    interests: [ExampleApproach, ExampleApproach],
  } as ApproachListProps,
} as Meta

export const Default: Story = (args: ApproachListProps) => (
  <ApproachList {...args} />
)
