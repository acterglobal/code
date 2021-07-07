import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ExampleActer } from '@acter/schema/fixtures'
import { ExampleUser } from '@acter/schema/fixtures'
import { PostForm, PostFormProps } from '@acter/components/posts/form'

export default {
  title: 'Post/Form',
  component: PostForm,
  args: {
    user: { ...ExampleUser, Acter: ExampleActer },
  },
} as Meta

export const Form: Story<PostFormProps> = (args) => <PostForm {...args} />
