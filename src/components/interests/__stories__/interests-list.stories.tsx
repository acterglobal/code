import { Meta, Story } from '@storybook/react'
import { InterestsList, InterestsListProps } from 'src/components/interests/'
import { interests } from 'src/__fixtures__'

export default {
  title: 'interests/InterestsList',
  component: InterestsList,
  args: {
    interests,
  } as InterestsListProps,
} as Meta
// this is a container for the Focus/Tag/Approach. And it switches between what they are .
export const Default: Story = (args: InterestsListProps) => (
  <InterestsList {...args} />
)
