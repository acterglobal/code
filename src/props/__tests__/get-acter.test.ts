jest.mock('@acter/lib/apollo')

import { ComposedGetServerSidePropsContext } from '@acter/lib/compose-props'
import { addApolloState, initializeApollo } from '@acter/lib/apollo'
import { OrganisationActerType, ExampleActer } from '@acter/schema/fixtures'
import { getActer } from 'src/props/get-acter'

const emptyContext = ({} as unknown) as ComposedGetServerSidePropsContext
const goodContext = ({
  props: {
    acterType: OrganisationActerType,
  },
  params: {
    slug: ExampleActer.slug,
  },
} as unknown) as ComposedGetServerSidePropsContext

describe('getActer', () => {
  const mockInitializeApollo = initializeApollo as jest.Mock
  const mockAddApolloState = addApolloState as jest.Mock

  beforeAll(() => {
    mockAddApolloState.mockImplementation((apollo, props) => props)
  })

  beforeEach(() => {
    mockInitializeApollo.mockReset()
  })

  it('should return not found when there is missing data', async () => {
    // eslint-disable-next-line
    ;[
      emptyContext,
      { ...emptyContext, props: {} },
      { ...emptyContext, props: { acterType: {} } },
      { ...emptyContext, props: { acterType: { id: null } } },
      { ...emptyContext, params: {} },
      { ...emptyContext, params: { slug: '' } },
    ].forEach(async (ctx) => {
      expect(await getActer(ctx)).toStrictEqual(
        expect.objectContaining({ notFound: true })
      )
    })
  })

  it('should return an error if the acter query fails', async () => {
    const error = 'there was an error'
    mockInitializeApollo.mockReturnValue({
      query: () => ({ error }),
    })

    expect(await getActer(goodContext)).toStrictEqual(
      expect.objectContaining({ props: { error } })
    )
  })

  it('should return an Acter', async () => {
    // eslint-disable-next-line
    mockInitializeApollo.mockReturnValue({
      query: () => ({ data: { findFirstActer: ExampleActer } }),
    })
    expect(await getActer(goodContext)).toStrictEqual(
      expect.objectContaining({ props: { acter: ExampleActer } })
    )
  })
})
