import { Story, Meta } from '@storybook/react'
import { AddActivity } from 'src/components/acter/landing-page/activities/add-activity'
import { OrganizationActerType, Interests } from 'src/__fixtures__'

export default {
  title: 'landingpage/AddActivityForm',
  component: AddActivity,
} as Meta

export const AddActivityForm: Story = () => (
  <AddActivity
    // acterType={OrganizationActerType}
    interestTypes={Interests.data.interestTypes}
    onSubmit={(values) => console.log(values)}
  />
)
