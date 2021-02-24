import { Story, Meta } from '@storybook/react'

import { ActerAvatar, ActerAvatarProps } from 'src/components/acter/avatar'

import { Acter } from '@generated/type-graphql'

import {
  ExampleActer,
  UserActerType,
  GroupActerType,
  OrganizationActerType,
  NetworkActerType,
} from 'src/__fixtures__'

export default {
  title: 'acter/Avatar',
  component: ActerAvatar,
  args: { acter: ExampleActer },
} as Meta

const Template: Story<ActerAvatarProps> = (args) => <ActerAvatar {...args} />

export const WithPicture: Story<ActerAvatarProps> = (args) => (
  <ActerAvatar {...args} />
)

export const User = Template.bind({})
User.args = {
  acter: {
    ...ExampleActer,
    avatarUrl: '',
    ActerType: UserActerType,
  } as Acter,
}

export const Group = Template.bind({})
Group.args = {
  acter: {
    ...ExampleActer,
    avatarUrl: '',
    ActerType: GroupActerType,
  } as Acter,
}

export const Organization = Template.bind({})
Organization.args = {
  acter: {
    ...ExampleActer,
    avatarUrl: '',
    ActerType: OrganizationActerType,
  } as Acter,
}

export const Network = Template.bind({})
Network.args = {
  acter: {
    ...ExampleActer,
    avatarUrl: '',
    ActerType: NetworkActerType,
  } as Acter,
}
