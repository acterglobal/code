import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ExamplePost, ExampleSubPost } from 'src/__fixtures__'
import { Posts as PostComponent, PostsProps } from 'src/components/posts'

export default {
  title: 'Post/Post',
  component: PostComponent,
  args: {
    post: {
      ...ExamplePost,
      Comments: [ExampleSubPost, ExampleSubPost],
    },
  },
} as Meta

export const Posts: Story<PostsProps> = (args) => <PostComponent {...args} />
