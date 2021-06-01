import { createSlug } from 'src/lib/acter/create-acter-slug'

describe('createSlug', () => {
  it('should return acter slug by its name', () => {
    expect(createSlug('Green eco organisation', null)).toBe(
      'green-eco-organisation'
    )
  })

  it('should return group slug by its name and parent acter slug', () => {
    expect(createSlug('Make it green', 'green-eco-organisation')).toBe(
      'green-eco-organisation-make-it-green'
    )
  })
})
