import { Story, Meta } from '@storybook/react'
import { InterestsAddSection } from 'src/components/acter/interests-add-section'

export default {
  title: 'interests/InterestsAdd',
  component: InterestsAddSection,
} as Meta

const testSetFieldValue = () => console.log('test')

export const InterestsAdd: Story = () => (
  <InterestsAddSection setFieldValue={testSetFieldValue} />
)
