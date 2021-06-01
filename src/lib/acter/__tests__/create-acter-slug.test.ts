import { createSlug } from 'src/lib/acter/create-acter-slug'

const acterName = 'Green eco organisation'
const acterSlug = 'green-eco-organisation'
const groupName = 'Make it green'
const groupSlug = `${acterSlug}-make-it-green`

describe('createSlug', () => {
  it('should return acter slug by its name', () => {
    expect(createSlug(acterName, null)).toBe(acterSlug)
  })

  it('should return group slug by its name and parent acter slug', () => {
    expect(createSlug(groupName, acterSlug)).toBe(groupSlug)
  })
})
