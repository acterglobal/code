import React from 'react'

import { Meta, Story } from '@storybook/react'

import { PostList } from '@acter/components/posts/organisms/post-list'
import {
  withExampleActerParams,
  withExampleUserParams,
} from '@acter/lib/storybook-helpers'
import {
  ExampleActer,
  ExampleActerConnection,
  ExamplePost,
  ExampleUser,
  ExampleUserActer,
} from '@acter/schema/fixtures'

const acter = {
  ...ExampleActer,
  Followers: [
    {
      ...ExampleActerConnection,
      Follower: ExampleUserActer,
    },
  ],
}

export default {
  title: 'Pages/Posts',
  component: PostList,
  parameters: {
    ...withExampleActerParams(acter),
    ...withExampleUserParams(),
    urql: () => ({
      data: {
        ...withExampleActerParams(acter).urql().data,
        ...withExampleUserParams().urql().data,
        posts: [ExamplePost],
        user: ExampleUser,
      },
    }),
  },
} as Meta

export const Main: Story = (props) => <PostList {...props} />
