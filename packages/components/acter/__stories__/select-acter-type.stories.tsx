import { Meta, Story } from '@storybook/react'

import {
  SelectActerType,
  SelectActerTypeProps,
} from '@acter/components/acter/select-acter-type'

export default {
  title: 'Organisms/Acter/SelectActerType',
  component: SelectActerType,
  argTypes: {
    onSubmit: {
      action: 'clicked',
    },
  },
} as Meta

export const Default: Story<SelectActerTypeProps> = (args) => (
  <SelectActerType {...args} />
)
