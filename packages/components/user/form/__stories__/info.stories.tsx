import { Meta, Story } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import {
  ProfileInfoForm,
  ProfileInfoFormProps,
} from '@acter/components/user/form/info'
import { ExampleUser, ExampleUserActer } from 'src/__fixtures__'

export default {
  title: 'UserProfile/Form/Info',
  component: ProfileInfoForm,
  args: {
    user: {
      ...ExampleUser,
      Acter: ExampleUserActer,
    },
  },
  decorators: [withNextRouter],
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
