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
    interests: [ExampleApproach, ExampleApproach, ExampleApproach, ExampleApproach, ExampleApproach, ExampleApproach, ExampleApproach, ExampleApproach, ExampleApproach],
  } as ApproachListProps,
} as Meta
// this is a container for the Focus/Tag/Approach. And it flips between what they are .
export const Default: Story = (args: ApproachListProps) => (
  <ApproachList {...args} />
)
