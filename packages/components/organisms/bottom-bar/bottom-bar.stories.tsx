import { Meta, Story } from '@storybook/react'

import {
  BottomBar,
  BottomBarProps,
} from '@acter/components/organisms/bottom-bar'
import { loggedInParameters } from '@acter/lib/storybook-helpers'

export default {
  title: 'Organisms/Layout/BottomBar',
  component: BottomBar,
  argTypes: {
    onOpen: { action: 'clicked' },
  },
} as Meta<BottomBarProps>

const Template: Story<BottomBarProps> = (args) => <BottomBar {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})
LoggedIn.parameters = loggedInParameters
