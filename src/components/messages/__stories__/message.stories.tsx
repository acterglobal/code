import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ExampleMessage } from 'src/__fixtures__/message/example-message'
import { MessageBox, MessageBoxProps } from 'src/components/messages/message'

export default {
  title: 'Message/Message',
  component: MessageBox,
  args: {
    message: ExampleMessage,
  },
} as Meta

export const Template: Story<MessageBoxProps> = (args) => (
  <MessageBox {...args} />
)
