import { Meta, Story } from '@storybook/react'

import {
  SelectActerType,
  SelectActerTypeProps,
} from '@acter/components/acter/select-acter-type'

export default {
  title: 'acter/AddActerSelector',
  component: SelectActerType,
  argTypes: {
    onSubmit: {
      action: 'clicked',
    },
  },
} as Meta

export const AddActerSelector: Story<SelectActerTypeProps> = (args) => (
  <SelectActerType {...args} />
)
