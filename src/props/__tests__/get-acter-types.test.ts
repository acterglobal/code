import { ComposedGetServerSidePropsContext } from 'src/lib/compose-props'
import { addApolloState, initializeApollo } from 'src/lib/apollo'

jest.mock('@apollo/client', () => ({
  useMutation: () => [() => void 0, { loading: false, error: false }],
}))
jest.mock('next-auth/client')
jest.mock('src/lib/apollo')

import {
  GroupActerType,
  NetworkActerType,
  OrganisationActerType,
} from 'src/__fixtures__'

import { getActerTypes } from 'src/props'
import { ORGANISATION } from 'src/constants'

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
      params: { acterType: ORGANISATION },
    } as unknown) as ComposedGetServerSidePropsContext

    expect(await getActerTypes(context)).toStrictEqual({
      props: {
        acterTypes,
      },
    })
  })
})
