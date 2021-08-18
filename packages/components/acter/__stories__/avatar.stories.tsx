import { Story, Meta } from '@storybook/react'

import { ActerAvatar, ActerAvatarProps } from '@acter/components/acter/avatar'

import { Acter } from '@acter/schema'

import {
  ExampleActer,
  UserActerType,
  GroupActerType,
  OrganisationActerType,
  NetworkActerType,
} from '@acter/schema/fixtures'

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

export const Organisation = Template.bind({})
Organisation.args = {
  acter: {
    ...ExampleActer,
    avatarUrl: '',
    ActerType: OrganisationActerType,
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
