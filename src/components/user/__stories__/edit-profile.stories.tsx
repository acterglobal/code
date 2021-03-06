import { Story, Meta } from '@storybook/react'
import {
  ProfileEdit as ProfileEditComponent,
  ProfileEditProps,
} from 'src/components/user/profile-edit'
import { Interests } from 'src/__fixtures__'

export default {
  title: 'user/ProfileEdit',
  component: ProfileEditComponent,
  args: {
    interestTypes: Interests.data.interestTypes,
    onSubmit: () => null,
  },
} as Meta

export const ProfileEdit: Story<ProfileEditProps> = (args) => (
  <ProfileEditComponent {...args} />
)
