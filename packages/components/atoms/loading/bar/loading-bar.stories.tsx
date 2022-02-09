import { Meta, Story } from '@storybook/react'

import { LoadingBar } from './index'

export default {
  title: 'Atoms/Loading/Bar',
  component: LoadingBar,
  args: {},
} as Meta

const Template: Story = (args) => <LoadingBar {...args} />

export const Default = Template.bind({})
