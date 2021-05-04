import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ExampleActer } from 'src/__fixtures__'
import {
  ExampleMessage,
  ExampleSubMessage,
} from 'src/__fixtures__/message/example-message'
import { MessageBox, MessageBoxProps } from 'src/components/messages/message'

export default {
  title: 'Message/Message',
  component: MessageBox,
  args: {
    message: ExampleMessage,
    comments: [ExampleSubMessage, ExampleSubMessage],
    acter: ExampleActer,
    // onSubmit: () => null,
  },
} as Meta

export const Posts: Story<MessageBoxProps> = (args) => <MessageBox {...args} />
