import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ExampleMessage, ExampleSubMessage } from 'src/__fixtures__'
import { Messages, MessagesProps } from 'src/components/messages'

export default {
  title: 'Message/Message',
  component: Messages,
  args: {
    message: {
      ...ExampleMessage,
      Comments: [ExampleSubMessage, ExampleSubMessage],
    },
  },
} as Meta

export const Posts: Story<MessagesProps> = (args) => <Messages {...args} />
