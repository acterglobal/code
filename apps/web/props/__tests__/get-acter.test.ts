import { getActer } from '../get-acter'

import { ComposedGetServerSidePropsContext } from '@acter/lib/compose-props'
import { OrganisationActerType, ExampleActer } from '@acter/lib/fixtures'
import { getUrqlClient } from '@acter/lib/urql'

jest.mock('@acter/lib/urql')

describe('getActer', () => {
  const mockGetUrqlClient = getUrqlClient as jest.Mock
  const emptyContext = ({} as unknown) as ComposedGetServerSidePropsContext
  const goodContext = ({
    props: {
      acterType: OrganisationActerType,
    },
    params: {
      slug: ExampleActer.slug,
    },
  } as unknown) as ComposedGetServerSidePropsContext

  beforeEach(() => {
    mockGetUrqlClient.mockReset()
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
    mockGetUrqlClient.mockReturnValue({
      query: () => ({
        toPromise: () => ({
          error,
        }),
      }),
    })

    expect(await getActer(goodContext)).toStrictEqual(
      expect.objectContaining({ props: { error } })
    )
  })

  it('should return an Acter', async () => {
    mockGetUrqlClient.mockReturnValue({
      query: () => ({
        toPromise: () => ({
          data: { findFirstActer: ExampleActer },
        }),
      }),
    })
    expect(await getActer(goodContext)).toStrictEqual(
      expect.objectContaining({ props: { acter: ExampleActer } })
    )
  })
})
