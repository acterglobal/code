import { Story, Meta } from '@storybook/react'

import { withFormik } from 'storybook-formik'

import { InterestsAddSection } from '@acter/components/acter/form/interests-add-section'
import { Interests } from '@acter/schema/fixtures'

export default {
  title: 'interests/InterestsAdd',
  component: InterestsAddSection,
  args: {
    interestTypes: Interests.data.interestTypes,
    setFieldValue: () => console.log('test'),
    initialValues: [],
  },
  decorators: [withFormik],
} as Meta

export const InterestsAdd: Story = (args) => <InterestsAddSection {...args} />
