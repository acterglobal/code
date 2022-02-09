import React from 'react'

import { Meta, Story } from '@storybook/react'

import { PostForm, PostFormProps } from '@acter/components/posts/form'
import { ExampleActer } from '@acter/lib/fixtures'
import { ExampleUser } from '@acter/lib/fixtures'

export default {
  title: 'Organisms/Posts/Form',
  component: PostForm,
  args: {
    user: { ...ExampleUser, Acter: ExampleActer },
  },
} as Meta

export const Form: Story<PostFormProps> = (args) => <PostForm {...args} />
