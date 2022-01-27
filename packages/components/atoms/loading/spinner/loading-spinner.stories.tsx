import { Meta, Story } from '@storybook/react'

import { LoadingSpinner } from './index'

export default {
  title: 'Atoms/Loading/Spinner',
  component: LoadingSpinner,
  args: {},
} as Meta

const Template: Story = (args) => <LoadingSpinner {...args} />

export const Default = Template.bind({})
