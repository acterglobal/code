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
  title: 'Pages/Posts',
  component: PostList,
  parameters: {
    di: {
      useActer,
    },
  },
} as Meta

export const Main: Story = (props) => <PostList {...props} />
