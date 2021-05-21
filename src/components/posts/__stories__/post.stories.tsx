import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ExamplePost, ExampleSubPost, ExampleActer } from 'src/__fixtures__'
import { ExampleUser } from 'src/__fixtures__'
import { PostList, PostListProps } from 'src/components/posts'

export default {
  title: 'Post/Post',
  component: PostList,
  args: {
    posts: [
      {
        ...ExamplePost,
        Comments: [ExampleSubPost, ExampleSubPost],
      },
    ],
    user: { ...ExampleUser, Acter: ExampleActer },
  },
} as Meta

export const Posts: Story<PostListProps> = (args) => <PostList {...args} />
