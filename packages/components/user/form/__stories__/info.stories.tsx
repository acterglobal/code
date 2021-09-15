import { Meta, Story } from '@storybook/react'

import { ProfileInfoForm } from '@acter/components/user/form/info'
import { ExampleUser, ExampleUserActer } from '@acter/schema/fixtures'

export default {
  title: 'UserProfile/Form/Info',
  component: ProfileInfoForm,
  args: {
    user: {
      ...ExampleUser,
      Acter: ExampleUserActer,
    },
  },
  parameters: {
    nextRouter: {
      pathname: 'profile/info',
    },
  },
} as Meta

const Template: Story = () => <ProfileInfoForm />

export const Main = Template.bind({})
