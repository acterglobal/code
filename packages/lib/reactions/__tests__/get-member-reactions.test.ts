import { getMemberReactions } from '@acter/lib/reactions/get-member-reactions'
import { PostReaction } from '@acter/schema'
import {
  ExamplePost,
  ExampleUser,
  ExampleUserActer,
} from '@acter/schema/fixtures'

const user1 = {
  ...ExampleUser,
  Acter: { ...ExampleUserActer, id: '64f7720c-fe48-446c-b427-3ecf1912b48p' },
}
const user2 = {
  ...ExampleUser,
  Acter: { ...ExampleUserActer, id: '42f7720c-fe48-446c-b427-3ecf1912b48k' },
}
const user3 = {
  ...ExampleUser,
  Acter: { ...ExampleUserActer, id: '12f7720c-fe48-446c-b427-3ecf1912b48s' },
}

const reaction1 = {
  emoji: '😀',
  emojiUnicode: '1f600',
  acterId: user1.Acter.id,
}
const reaction2 = {
  emoji: '😍',
  emojiUnicode: '1f60d',
  acterId: user1.Acter.id,
}
const reaction3 = {
  emoji: '🤖',
  emojiUnicode: '1f916',
  acterId: user1.Acter.id,
}
const reaction4 = {
  emoji: '😀',
  emojiUnicode: '1f600',
  acterId: user2.Acter.id,
}
const reaction5 = {
  emoji: '😜',
  emojiUnicode: '1f61c',
  acterId: user1.Acter.id,
}
const reaction6 = {
  emoji: '😍',
  emojiUnicode: '1f60d',
  acterId: user2.Acter.id,
}
const post = {
  ...ExamplePost,
  PostReactions: [
    reaction1,
    reaction2,
    reaction3,
    reaction4,
    reaction5,
    reaction6,
  ] as PostReaction[],
}

describe('getMemberReactions', () => {
  it('should return null if no post or user passed', () => {
    expect(getMemberReactions(undefined, null)).toBe(undefined)
  })

  it('should return empty list if no user passed', () => {
    expect(getMemberReactions(post, null)).toEqual([])
  })

  it('should return list of reactions reacted by USER1', () => {
    expect(getMemberReactions(post, user1)).toHaveLength(4)

    const user1Reactions = [reaction1, reaction2, reaction3, reaction5]
    expect(getMemberReactions(post, user1)).toEqual(user1Reactions)
  })

  it('should return list of reactions reacted by USER2', () => {
    expect(getMemberReactions(post, user2)).toHaveLength(2)

    const user2Reactions = [reaction4, reaction6]
    expect(getMemberReactions(post, user2)).toEqual(user2Reactions)
  })

  it('should return empty list of reactions for USER3', () => {
    expect(getMemberReactions(post, user3)).toHaveLength(0)

    expect(getMemberReactions(post, user3)).toEqual([])
  })
})
