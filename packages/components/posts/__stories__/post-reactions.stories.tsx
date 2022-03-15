import { Meta, Story } from '@storybook/react'

import {
  PostReactions,
  PostReactionsProps,
} from '@acter/components/posts/reactions'
import { withExampleActerParams } from '@acter/lib/storybook-helpers'
import { ExamplePost } from '@acter/schema/fixtures'

const reaction1 = {
  emoji: '😀',
  emojiUnicode: '1f600',
  acterId: '9b6d7090-827a-4723-b601-14872de00dc9',
  postId: '64f7720c-fe48-446c-b427-3ecf1912b48p',
}
const reaction2 = {
  emoji: '😍',
  emojiUnicode: '1f60d',
  acterId: '9b6d7090-827a-4723-b601-14872de00ec2',
  postId: '64f7720c-fe48-446c-b427-3ecf1912b48a',
}
const reaction3 = {
  emoji: '😍',
  emojiUnicode: '1f60d',
  acterId: '076d7090-827a-4723-b601-14872de00ewe',
  postId: '98f7720c-fe48-446c-b427-3ecf1912b213',
}

export default {
  title: 'Organisms/Post/Reactions',
  component: PostReactions,
  args: {
    post: {
      ...ExamplePost,
      PostReactions: [reaction1, reaction2, reaction3],
    },
  },
  parameters: withExampleActerParams(),
} as Meta

export const Reactions: Story<PostReactionsProps> = (args) => (
  <PostReactions {...args} />
)
