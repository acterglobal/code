import { Meta, Story } from '@storybook/react'
import { withFormik } from 'storybook-formik'
import {
  DetailsStep,
  DetailsStepProps,
  DetailsStepValues,
} from 'src/components/activity/form/steps/details'
import { Interests } from 'src/__fixtures__'

export default {
  title: 'Activity/Form/Steps/Details',
  component: DetailsStep,
  args: {
    interestTypes: Interests.data.interestTypes,
  } as DetailsStepProps,
  decorators: [withFormik],
  parameters: {
    layout: 'padded',
    formik: {
      initialValues: {
        bannerUrl: '',
        description: '',
      } as DetailsStepValues,
    },
  },
} as Meta

const Template: Story<DetailsStepProps> = (args) => (
  <div style={{ width: 600 }}>
    <DetailsStep {...args} />
  </div>
)

export const New = Template.bind({})
