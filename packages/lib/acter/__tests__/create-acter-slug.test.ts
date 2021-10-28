import { createSlug } from '@acter/lib/acter/create-acter-slug'
import { ActerGraphQLContext } from '@acter/lib/types/graphql-api'

describe('createSlug', () => {
  const mockedResults = Promise.resolve({
    slug: 'green-eco-organisation',
  })

  const ctx = {
    session: { user: {} },
    prisma: { acter: { findFirst: () => mockedResults } },
  } as ActerGraphQLContext

  it('should return acter slug by its name', async () => {
    const slug = await createSlug(ctx, 'Green eco organisation', null)
    expect(slug).toBe('green-eco-organisation')
  })

  it('should return group slug by its name and parent acter slug', async () => {
    const slug = await createSlug(ctx, 'make it green', '221133-55455')
    expect(slug).toBe('green-eco-organisation-make-it-green')
  })
})
