import { Story, Meta } from '@storybook/react'

import {
  InterestsList,
  InterestsListProps,
} from 'src/components/interests/'

import { Interest, ExampleApproach, ExampleFocus, ExampleTag, tags } from 'src/__fixtures__'

export default {
  title: 'interests/InterestsList',
  component: InterestsList,
  args: {
    type: Interest,
    approaches: [ExampleApproach, ExampleApproach],
    focuses: [ExampleFocus, ExampleFocus],
    tags: [tags[0], tags[1]],
  } as InterestsListProps,
} as Meta
// this is a container for the Focus/Tag/Approach. And it flips between what they are .
export const Default: Story = (args: InterestsListProps) => (
  <InterestsList {...args} />
)
