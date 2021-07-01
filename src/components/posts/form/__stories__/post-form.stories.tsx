import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ExampleActer } from 'src/__fixtures__'
import { ExampleUser } from 'src/__fixtures__'
import { PostForm, PostFormProps } from 'src/components/posts/form'

export default {
  title: 'Post/Form',
  component: PostForm,
  args: {
    user: { ...ExampleUser, Acter: ExampleActer },
  },
} as Meta

export const Form: Story<PostFormProps> = (args) => <PostForm {...args} />
