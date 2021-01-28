import { Story, Meta } from '@storybook/react'

import {
  InterestsList,
  InterestsListProps,
} from 'src/components/interests/interests-list'

import { ExampleApproach, ExampleApproachType } from 'src/__fixtures__'

export default {
  title: 'interests/InterestsList',
  component: InterestsList,
  args: {
    type: ExampleApproachType,
    interests: [ExampleApproach, ExampleApproach, ExampleApproach],
  } as InterestsListProps,
} as Meta
// this is a container for the Focus/Tag/Approach. And it flips between what they are .
export const Default: Story = (args: InterestsListProps) => (
  <InterestsList {...args} />
)
