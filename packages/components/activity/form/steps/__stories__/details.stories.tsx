import { Meta, Story } from '@storybook/react'

import { withFormik } from 'storybook-formik'

import {
  DetailsStep,
  DetailsStepValues,
} from '@acter/components/activity/form/steps/details'
import { withExampleInterestParams } from '@acter/lib/storybook-helpers/with-example-interest-params'

export default {
  title: 'Organisms/Activity/Form/Steps/Details',
  component: DetailsStep,

  decorators: [withFormik],
  parameters: {
    ...withExampleInterestParams,
    layout: 'padded',
    formik: {
      initialValues: {
        bannerUrl: '',
        description: '',
      } as DetailsStepValues,
    },
  },
} as Meta

const Template: Story = (args) => (
  <div style={{ width: 600 }}>
    <DetailsStep {...args} />
  </div>
)

export const New = Template.bind({})
