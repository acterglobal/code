import { InterestType } from '@generated/type-graphql'
import { Meta, Story } from '@storybook/react'
import { InterestsList, InterestsListProps } from 'src/components/interests/'
import { Interest, interests } from 'src/__fixtures__'


export default {
  title: 'interests/InterestsList',
  component: InterestsList,
  args: {
    interests,
  } as InterestsListProps,
} as Meta

export const Default: Story = (args: InterestType) => (
  <InterestsList {...args} />
)
