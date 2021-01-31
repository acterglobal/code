import { Acter } from '@prisma/client'
import { Story, Meta } from '@storybook/react'

import {
  AddActerWidget,
  AddActerWidgetProps,
} from 'src/components/acter/add-acter-widget'

import { UserActerType, ActerTypes } from 'src/__fixtures__'

export default {
  title: 'acters/AddActerWidget',
  component: AddActerWidget,
  args: {
    currentActerType: UserActerType,
    acterTypes: ActerTypes,
  } as AddActerWidgetProps,
} as Meta

const Template: Story<AddActerWidgetProps> = (args) => (
  <AddActerWidget {...args} />
)

export const Default = Template.bind({})
