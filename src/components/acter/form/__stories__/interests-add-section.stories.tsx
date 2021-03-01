import { Story, Meta } from '@storybook/react'
import { InterestsAddSection } from 'src/components/acter/form/interests-add-section'
import { Interests } from 'src/__fixtures__'

export default {
  title: 'interests/InterestsAdd',
  component: InterestsAddSection,
} as Meta

const testSetFieldValue = () => console.log('test')

export const InterestsAdd: Story = () => (
  <InterestsAddSection
    interestTypes={Interests.data.interestTypes}
    setFieldValue={testSetFieldValue}
  />
)
