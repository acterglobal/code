import { Story, Meta } from '@storybook/react'
import { ActivityForm, ActivityFormProps } from 'src/components/activities/form'
import { Interests, ExampleActer } from 'src/__fixtures__'

export default {
  title: 'landingpage/AddActivityForm',
  component: ActivityForm,
  args: {
    acter: ExampleActer,
    interestTypes: Interests.data.interestTypes,
    onSubmit: (values) => console.log(values),
  },
} as Meta

export const AddActivityForm: Story<ActivityFormProps> = (args) => (
  <ActivityForm {...args} />
)
