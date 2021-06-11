import { Meta, Story } from '@storybook/react'
import { withFormik } from 'storybook-formik'
import { v4 } from 'uuid'
import {
  SettingsStep,
  SettingsStepProps,
  SettingsStepValues,
} from 'src/components/activity/form/steps/settings'
import { ExampleActer } from 'src/__fixtures__'

export default {
  title: 'Activity/Form/Steps/Settings',
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
        postToActerIds: [],
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
