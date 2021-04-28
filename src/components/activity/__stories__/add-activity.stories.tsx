import { Story, Meta } from '@storybook/react'
import { ActivityForm, ActivityFormProps } from 'src/components/activity/form'
import { Interests, ExampleActer, ExampleUser } from 'src/__fixtures__'

export default {
  title: 'Activity/AddActivityForm',
  component: ActivityForm,
  args: {
    acter: ExampleActer,
    user: ExampleUser,
    interestTypes: Interests.data.interestTypes,
    onSubmit: (values) => console.log(values),
  },
} as Meta

export const AddActivityForm: Story<ActivityFormProps> = (args) => (
  <ActivityForm {...args} />
)
