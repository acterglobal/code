jest.mock('@acter/lib/apollo')

import { ComposedGetServerSidePropsContext } from '@acter/lib/compose-props'
import { addApolloState, initializeApollo } from '@acter/lib/apollo'
import { getActerTypes } from 'src/props/get-acter-types'
import { ActerTypes } from '@acter/lib/constants'
import {
  GroupActerType,
  NetworkActerType,
  OrganisationActerType,
} from '@acter/schema/fixtures'

describe('getActerTypes', () => {
  const mockInitializeApollo = initializeApollo as jest.Mock
  const mockAddApolloState = addApolloState as jest.Mock

  const acterTypes = [GroupActerType, NetworkActerType, OrganisationActerType]
  let context = ({} as unknown) as ComposedGetServerSidePropsContext

  beforeAll(() => {
    mockAddApolloState.mockImplementation((apollo, props) => props)
  })

  beforeEach(() => {
    mockInitializeApollo.mockReset()
    context = ({} as unknown) as ComposedGetServerSidePropsContext
  })
  it('should return an error if acter type query fails', async () => {
    const error = 'there was an error'
    mockInitializeApollo.mockReturnValue({
      query: () => ({
        error,
      }),
    })

    expect(await getActerTypes(context)).toStrictEqual(
      expect.objectContaining({
        props: {
          error,
        },
      })
    )
  })
  it('should set selected acter type as well as list of all acter types', async () => {
    // eslint-disable-next-line
    mockInitializeApollo.mockReturnValue({
      query: () => ({ data: { acterTypes } }),
    })
    context = ({
      params: { acterType: ActerTypes.ORGANISATION },
    } as unknown) as ComposedGetServerSidePropsContext

    expect(await getActerTypes(context)).toStrictEqual({
      props: {
        acterTypes,
      },
    })
  })
})
