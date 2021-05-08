import { Story, Meta } from '@storybook/react'
import {
  InterestsAddSection,
  InterestsAddSectionProps,
} from 'src/components/acter/form/interests-add-section'
import { Interests } from 'src/__fixtures__'

export default {
  title: 'interests/InterestsAdd',
  component: InterestsAddSection,
  args: {
    interestTypes: Interests.data.interestTypes,
    setFieldValue: () => console.log('test'),
    initialValues: [],
  },
} as Meta

export const InterestsAdd: Story<InterestsAddSectionProps> = (args) => (
  <InterestsAddSection {...args} />
)
