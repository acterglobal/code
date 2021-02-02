import { Meta, Story } from '@storybook/react'
import { InterestsList } from 'src/components/interests'
import { interests } from 'src/__fixtures__'
import {
  InterestType
} from '@generated/type-graphql'


export default {
  title: 'interests/InterestsList',
  component: InterestsList,
  args: interests as InterestType[],
} as Meta

export const Default: Story = (args: InterestType) => (
  <InterestsList {...args} />
)
