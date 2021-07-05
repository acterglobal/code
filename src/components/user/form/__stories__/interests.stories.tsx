import { Meta, Story } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import {
  ProfileInterestsForm,
  ProfileInterestsFormProps,
} from 'src/components/user/form/interests'
import { ExampleUser, ExampleUserActer, Interests } from 'src/__fixtures__'

export default {
  title: 'UserProfile/Form/Interests',
  component: ProfileInterestsForm,
  args: {
    user: {
      ...ExampleUser,
      Acter: ExampleUserActer,
    },
    interestTypes: Interests.data.interestTypes,
  },
  decorators: [withNextRouter],
  parameters: {
    nextRouter: {
      pathname: 'profile/interests',
    },
  },
} as Meta

const Template: Story<ProfileInterestsFormProps> = (args) => (
  <ProfileInterestsForm {...args} />
)

export const Main = Template.bind({})
