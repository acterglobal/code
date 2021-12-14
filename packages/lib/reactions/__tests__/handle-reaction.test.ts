import { handleReaction } from '../handle-reaction'

import { PostReaction } from '@acter/schema'
import {
  ExamplePost,
  ExampleUser,
  ExampleUserActer,
} from '@acter/schema/fixtures'

describe('handleReaction', () => {
  const user = {
    ...ExampleUser,
    Acter: { ...ExampleUserActer },
  }

  const reaction1 = {
    id: '20197090-827a-4723-b601-14872de00738',
    emoji: '😀',
    emojiUnicode: '1f600',
    acterId: '9b6d7090-827a-4723-b601-14872de00dc9',
    postId: '64f7720c-fe48-446c-b427-3ecf1912b48p',
  }
  const reaction2 = {
    id: '712d7090-827a-4723-b601-14872de00734',
    emoji: '😍',
    emojiUnicode: '1f60d',
    acterId: user.Acter.id,
    postId: '64f7720c-fe48-446c-b427-3ecf1912b48a',
  }
  const reaction3 = {
    id: '90197090-827a-4723-b601-14872de00739',
    emoji: '😍',
    emojiUnicode: '1f60d',
    acterId: user.Acter.id,
    postId: '98f7720c-fe48-446c-b427-3ecf1912b213',
  }

  const post = {
    ...ExamplePost,
    PostReactions: [reaction1, reaction2, reaction3] as PostReaction[],
  }
  const params = {
    emojiData: null,
    post,
    user,
    createReaction: jest.fn().mockReturnValue(reaction1),
    deleteReaction: jest.fn().mockReturnValue(reaction2),
  }

  it('should return null if no user passed', () => {
    expect(handleReaction({ ...params, user: undefined })).toBe(null)
  })

  it('should call delete handle method and return deleted reaction if member already reacted the post with same emoji', () => {
    const emojiData = {
      emoji: '😍',
      emojiUnicode: '1f60d',
    }
    const handlePostReaction = handleReaction({ ...params, emojiData })

    expect(params.deleteReaction).toHaveBeenCalled()

    expect(handlePostReaction).toEqual(reaction2)
  })

  it('should call create handle method if reaction does exist', () => {
    const emojiData = {
      emoji: '😀',
      emojiUnicode: '1f600',
    }

    handleReaction({ ...params, emojiData })

    expect(params.createReaction).toHaveBeenCalled()
  })
})
