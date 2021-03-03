import { Story, Meta } from '@storybook/react'
import { AddActivity } from 'src/components/acter/landing-page/activities/form'
import { Interests, ExampleActer } from 'src/__fixtures__'

export default {
  title: 'landingpage/AddActivityForm',
  component: AddActivity,
} as Meta

export const AddActivityForm: Story = () => (
  <AddActivity
    acter={ExampleActer}
    interestTypes={Interests.data.interestTypes}
    onSubmit={(values) => console.log(values)}
  />
)
