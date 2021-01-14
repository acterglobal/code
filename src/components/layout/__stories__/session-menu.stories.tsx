import { Story, Meta } from '@storybook/react'

import {
  SessionMenu,
  SessionMenuProps,
} from 'src/components/layout/session-menu'

import { ExampleUser } from 'src/__fixtures__/user/example-user'

export default {
  title: 'layout/SessionMenu',
  component: SessionMenu,
  args: {
    signedInAs: ExampleUser.email,
  } as SessionMenuProps,
} as Meta

const Template: Story<SessionMenuProps> = (args: SessionMenuProps) => (
  <SessionMenu {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isMenuOpen: true,
} as SessionMenuProps
