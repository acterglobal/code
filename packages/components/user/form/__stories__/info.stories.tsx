import { Meta, Story } from '@storybook/react'
import {
  ProfileInfoForm,
  ProfileInfoFormProps,
} from '@acter/components/user/form/info'
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

const Template: Story<ProfileInfoFormProps> = (args) => (
  <ProfileInfoForm {...args} />
)

export const Main = Template.bind({})
