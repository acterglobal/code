import { Meta, Story } from '@storybook/react'

import { Switch, SwitchProps } from './index'

export default {
  title: 'Atoms/Fields/Switch',
  component: Switch,
  args: {
    color: 'primary',
  },
} as Meta<SwitchProps>

const Template: Story<SwitchProps> = (args) => <Switch {...args} />

export const Off = Template.bind({})
Off.args = {}

export const On = Template.bind({})
On.args = {
  checked: true,
}

export const SmallOff = Template.bind({})
SmallOff.args = {
  size: 'small',
}

export const SmallOn = Template.bind({})
SmallOn.args = {
  size: 'small',
  checked: true,
}

export const SecondaryOff = Template.bind({})
SecondaryOff.args = {
  color: 'secondary',
}

export const SecondaryOn = Template.bind({})
SecondaryOn.args = {
  color: 'secondary',
  checked: true,
}
