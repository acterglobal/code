import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ExampleMessage, ExampleSubMessage } from 'src/__fixtures__'
import { MessageBox, MessageBoxProps } from 'src/components/messages/message'

export default {
  title: 'Message/Message',
  component: MessageBox,
  args: {
    message: {
      ...ExampleMessage,
    Comments: [ExampleSubMessage, ExampleSubMessage],
    }
    
  },
} as Meta

export const Posts: Story<MessageBoxProps> = (args) => <MessageBox {...args} />
