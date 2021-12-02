import { Story, Meta } from '@storybook/react'

import { withFormik } from 'storybook-formik'

import { InterestsAddSection } from '@acter/components/acter/form/interests-add-section'
import { Interests } from '@acter/schema/fixtures'

export default {
  title: 'Organisms/Interests/InterestsAdd',
  component: InterestsAddSection,
  args: {
    setFieldValue: () => void 0,
    initialValues: [],
  },
  decorators: [withFormik],
  parameters: {
    urql: () => ({ data: { interestTypes: Interests.data.interestTypes } }),
  },
} as Meta

export const InterestsAdd: Story = (args) => <InterestsAddSection {...args} />
