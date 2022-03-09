import { Story, Meta } from '@storybook/react'

import {
  InterestsSection,
  InterestsSectionProps,
} from '@acter/components/interests/interests-section'
import { withExampleInterestParams } from '@acter/lib/storybook-helpers/with-example-interest-params'

export default {
  title: 'Organisms/Interests/Section',
  component: InterestsSection,
  args: {
    columns: false,
    showTitle: true,
  },
  parameters: withExampleInterestParams,
} as Meta

const Template: Story<InterestsSectionProps> = (args) => (
  <InterestsSection {...args} />
)

export const Default: Story = Template.bind({})
