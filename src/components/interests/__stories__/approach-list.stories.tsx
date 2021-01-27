import { Story, Meta } from '@storybook/react'

import {
  ApproachList,
  ApproachListProps,
} from 'src/components/interests/approach-list'

import { ExampleApproach, ExampleInterestType } from 'src/__fixtures__'

export default {
  title: 'interests/ApproachList',
  component: ApproachList,
  args: {
    type: ExampleInterestType,
    interests: [ExampleApproach, ExampleApproach, ExampleApproach, ExampleApproach, ExampleApproach, ExampleApproach, ExampleApproach, ExampleApproach, ExampleApproach],
  } as ApproachListProps,
} as Meta

export const Default: Story = (args: ApproachListProps) => (
  <ApproachList {...args} />
)
