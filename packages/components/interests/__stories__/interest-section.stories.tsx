import { Story, Meta } from '@storybook/react'
import {
  InterestsSection,
  InterestsSectionProps,
} from '@acter/components/interests/interests-section'
import { Interests } from 'src/__fixtures__'

export default {
  title: 'interests/Section',
  component: InterestsSection,
  args: {
    columns: false,
    showTitle: true,
    interestTypes: Interests.data.interestTypes,
  },
} as Meta

const Template: Story<InterestsSectionProps> = (args) => (
  <InterestsSection {...args} />
)

export const Default: Story = Template.bind({})
