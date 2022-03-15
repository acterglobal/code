import { Story, Meta } from '@storybook/react'

import { withFormik } from 'storybook-formik'

import { InterestsAddSection } from '@acter/components/acter/form/interests-add-section'
import { withExampleInterestParams } from '@acter/lib/storybook-helpers/with-example-interest-params'

export default {
  title: 'Organisms/Interests/InterestsAdd',
  component: InterestsAddSection,
  args: {
    setFieldValue: () => void 0,
    initialValues: [],
  },
  decorators: [withFormik],
  parameters: withExampleInterestParams,
} as Meta

export const InterestsAdd: Story = (args) => <InterestsAddSection {...args} />
