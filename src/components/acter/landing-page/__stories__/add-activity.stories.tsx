import { Story, Meta } from '@storybook/react'
import {
  AddActivity,
  ActivityFormProps,
} from 'src/components/acter/landing-page/activities/form'
import { Interests, ExampleActer } from 'src/__fixtures__'

export default {
  title: 'landingpage/AddActivityForm',
  component: AddActivity,
  args: {
    acter: ExampleActer,
    interestTypes: Interests.data.interestTypes,
    onSubmit: (values) => console.log(values),
  },
} as Meta

export const AddActivityForm: Story<ActivityFormProps> = (args) => (
  <AddActivity {...args} />
)
