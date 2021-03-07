import { Story, Meta } from '@storybook/react'
import {
  InterestsSection,
  InterestsSectionProps,
} from 'src/components/interests/interests-section'
import { Interests } from 'src/__fixtures__'

export default {
  title: 'interests/Section',
  component: InterestsSection,
  args: {
    interestTypes: Interests.data.interestTypes,
    columns: false,
  },
} as Meta

const Template: Story<InterestsSectionProps> = (args) => (
  <InterestsSection {...args} />
)

export const Default: Story = Template.bind({})
