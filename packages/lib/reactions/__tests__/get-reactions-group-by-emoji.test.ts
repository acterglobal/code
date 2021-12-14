import { getPostReactionsGroupByEmoji } from '@acter/lib/reactions/get-reactions-group-by-emoji'
import { PostReaction } from '@acter/schema'

describe('getPostReactionsGroupByEmoji', () => {
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

  it('should return null if no reactions passed', () => {
    expect(getPostReactionsGroupByEmoji(undefined)).toEqual(null)
  })

  it('should return object with emojis as keys and array of reactions as values', () => {
    const reactions = [reaction1, reaction2, reaction3] as PostReaction[]
    const results = {
      '😀': [reaction1],
      '😍': [reaction2, reaction3],
    }

    expect(getPostReactionsGroupByEmoji(reactions)).toEqual(results)
  })
})
