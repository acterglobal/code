import { Story, Meta } from '@storybook/react'
import InterestsSection from 'src/components/interests/interests-section'

import { Interests } from 'src/__fixtures__'

export default {
  title: 'interests/Interests',
  component: InterestsSection,
} as Meta

export const Default: Story = () => (
  <InterestsSection interestTypes={Interests.data.interestTypes} />
)
