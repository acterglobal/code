import { getMemberReactions } from '@acter/lib/reactions/get-member-reactions'
import { PostReaction } from '@acter/schema'
import {
  ExamplePost,
  ExampleUser,
  ExampleUserActer,
} from '@acter/schema/fixtures'

describe('getMemberReactions', () => {
  const user = {
    ...ExampleUser,
    Acter: { ...ExampleUserActer },
  }
  const reaction1 = {
    emoji: '😀',
    emojiUnicode: '1f600',
    acterId: user.Acter.id,
    postId: '64f7720c-fe48-446c-b427-3ecf1912b48p',
  }
  const reaction2 = {
    emoji: '😍',
    emojiUnicode: '1f60d',
    acterId: '9b6d7090-827a-4723-b601-14872de00ec2',
    postId: '64f7720c-fe48-446c-b427-3ecf1912b48a',
  }

  const post = {
    ...ExamplePost,
    PostReactions: [{ ...reaction1 }, { ...reaction2 }] as PostReaction[],
  }

  it('should return null if no post or user passed', () => {
    expect(getMemberReactions(undefined, null)).toBe(undefined)
  })

  it('should return empty list if no user passed', () => {
    expect(getMemberReactions(post, null)).toEqual([])
  })

  it('should return list of reactions member reacted', () => {
    expect(getMemberReactions(post, user)).toHaveLength(1)

    expect(getMemberReactions(post, user)).toEqual([reaction1])
  })
})
