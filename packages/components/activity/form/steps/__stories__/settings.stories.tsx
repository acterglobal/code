import { Meta, Story } from '@storybook/react'

import { withFormik } from 'storybook-formik'
import { v4 } from 'uuid'

import {
  SettingsStep,
  SettingsStepProps,
  SettingsStepValues,
} from '@acter/components/activity/form/steps/settings'
import { ExampleActer } from '@acter/lib/fixtures'

export default {
  title: 'Organisms/Activity/Form/Steps/Settings',
  component: SettingsStep,
  args: {
    acters: [
      { ...ExampleActer, id: v4(), name: 'Acter 1' },
      { ...ExampleActer, id: v4(), name: 'Acter 2' },
      { ...ExampleActer, id: v4(), name: 'Acter 3' },
    ],
  },
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        organiserActerId: '',
        followerIds: [],
      } as SettingsStepValues,
    },
  },
} as Meta

const Template: Story<SettingsStepProps> = (args) => (
  <div style={{ width: 600 }}>
    <SettingsStep {...args} />
  </div>
)

export const Main = Template.bind({})
