import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ExamplePost, ExampleSubPost, ExampleActer } from 'src/__fixtures__'
import { Posts as PostComponent, PostsProps } from 'src/components/posts'
import { ExampleUser } from 'src/__fixtures__/user/example-user'

export default {
  title: 'Post/Post',
  component: PostComponent,
  args: {
    post: {
      ...ExamplePost,
      Comments: [ExampleSubPost, ExampleSubPost],
    },
    user: { ...ExampleUser, Acter: ExampleActer },
  },
} as Meta

export const Posts: Story<PostsProps> = (args) => <PostComponent {...args} />
