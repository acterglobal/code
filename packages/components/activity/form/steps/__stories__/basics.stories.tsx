import { Meta, Story } from '@storybook/react'

import { add } from 'date-fns'
import { withFormik } from 'storybook-formik'

import {
  BasicsStep,
  BasicsStepValues,
} from '@acter/components/activity/form/steps/basics'
import { ExampleActer } from '@acter/lib/fixtures'

export default {
  title: 'Organisms/Activity/Form/Steps/Basics',
  component: BasicsStep,
  args: {
    acters: [ExampleActer],
  },
  decorators: [withFormik],
  parameters: {
    layout: 'padded',
    formik: {
      initialValues: {
        activityTypeId: '',
        endAt: null,
        isOnline: false,
        isAllDay: false,
        organiserActerId: '',
        startAt: null,
      } as BasicsStepValues,
    },
  },
} as Meta

const Template: Story = (args) => (
  <div style={{ width: 600 }}>
    <BasicsStep {...args} />
  </div>
)

export const Create = Template.bind({})

const tomorrow = add(new Date(), { days: 1 })
const dayAfterTomorrow = add(tomorrow, { days: 1 })
export const Edit = Template.bind({})
Edit.parameters = {
  formik: {
    initialValues: {
      activityTypeId: '',
      endAt: dayAfterTomorrow,
      isAllDay: false,
      isOnline: true,
      location: '',
      locationLat: null,
      locationLng: null,
      placeId: '',
      name: 'Example Event',
      organiserActerId: '',
      startAt: tomorrow,
      url: 'http://example.com',
    } as BasicsStepValues,
  },
}
