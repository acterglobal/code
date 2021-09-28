import { Meta, Story } from '@storybook/react'

import { ProfileInterestsForm } from '@acter/components/user/form/interests'
import {
  ExampleUser,
  ExampleUserActer,
  Interests,
} from '@acter/schema/fixtures'

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
  parameters: {
    nextRouter: {
      pathname: 'profile/interests',
    },
  },
} as Meta

const Template: Story = (args) => <ProfileInterestsForm {...args} />

export const Main = Template.bind({})
