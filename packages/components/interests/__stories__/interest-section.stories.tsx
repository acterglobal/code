import { Story, Meta } from '@storybook/react'

import {
  InterestsSection,
  InterestsSectionProps,
} from '@acter/components/interests/interests-section'
import { Interests } from '@acter/lib/fixtures'

export default {
  title: 'Organisms/Interests/Section',
  component: InterestsSection,
  args: {
    columns: false,
    showTitle: true,
  },
  parameters: {
    urql: () => ({ data: { interestTypes: Interests.data.interestTypes } }),
  },
} as Meta

const Template: Story<InterestsSectionProps> = (args) => (
  <InterestsSection {...args} />
)

export const Default: Story = Template.bind({})
