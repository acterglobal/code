import { InterestType } from '@generated/type-graphql'
import { Meta, Story } from '@storybook/react'
import { InterestTypeList, InterestTypeListProps } from 'src/components/interests/'
import { Interests } from 'src/__fixtures__'


export default {
  title: 'interests/InterestsList',
  component: InterestTypeList,
  args: {
    Interests,
  } as InterestTypeListProps,
} as Meta

export const Default: Story = (args: InterestTypeListProps) => (
  <InterestTypeList {...args} />
)
