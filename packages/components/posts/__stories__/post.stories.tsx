import React from 'react'

import { Meta, Story } from '@storybook/react'

import { PostList } from '@acter/components/posts'
import { useActerDi, acterDefault } from '@acter/lib/di'
import {
  ExampleActerConnection,
  ExampleUserActer,
} from '@acter/schema/fixtures'

const useActer = useActerDi({
  ...acterDefault,
  Followers: [
    {
      ...ExampleActerConnection,
      Follower: ExampleUserActer,
    },
  ],
})

export default {
  title: 'Post/Post',
  component: PostList,
  parameters: {
    di: {
      useActer,
    },
  },
} as Meta

export const Posts: Story = (props) => <PostList {...props} />
