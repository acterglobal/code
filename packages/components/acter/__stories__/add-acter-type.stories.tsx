import { Meta, Story } from '@storybook/react'

import {
  AddActerType,
  AddActerTypeProps,
} from '@acter/components/acter/add-acter-type'

export default {
  title: 'acter/AddActerSelector',
  component: AddActerType,
  argTypes: {
    onSubmit: {
      action: 'clicked',
    },
  },
} as Meta

export const AddActerSelector: Story<AddActerTypeProps> = (args) => (
  <AddActerType {...args} />
)
