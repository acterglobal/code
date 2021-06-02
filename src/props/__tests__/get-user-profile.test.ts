import { getSession } from '@auth0/nextjs-auth0'
import { getUserProfile } from 'src/props'
import { addApolloState, initializeApollo } from 'src/lib/apollo'
import { ComposedGetServerSidePropsContext } from 'src/lib/compose-props'
import { ExampleUser } from 'src/__fixtures__'

jest.mock('@auth0/nextjs-auth0')
jest.mock('src/lib/apollo')

describe('getUserProfile', () => {
  const mockInitializeApollo = initializeApollo as jest.Mock
  const mockAddApolloState = addApolloState as jest.Mock
  const mockGetSession = getSession as jest.Mock
  const context = ({} as unknown) as ComposedGetServerSidePropsContext

  beforeAll(() => {
    mockAddApolloState.mockImplementation((apollo, props) => props)
  })

  beforeEach(() => {
    mockInitializeApollo.mockReset()
  })

  it('should redirect if there is no session and user required', async () => {
    const resp = await getUserProfile(true)(context)

    //@ts-ignore
    expect(resp.redirect.destination).toBe('/')
  })

  it('should return empty props if there is no session and user is not required', async () => {
    const resp = await getUserProfile(false)(context)

    //@ts-ignore
    expect(resp.props).toStrictEqual({})
  })

  describe('with good user', () => {
    beforeEach(() => {
      mockGetSession.mockReturnValue({
        user: {
          id: '8ed89d94-3bc5-4be1-9bb6-dff355601e1c',
          email: 'test@example.com',
        },
      })
    })

    it('should return loading while query is in process', async () => {
      mockInitializeApollo.mockReturnValue({
        query: () => Promise.resolve({ loading: true }),
      })
      const resp = await getUserProfile(true)(context)
      //@ts-ignore
      expect(resp?.props?.loading).toBe(true)
    })

    it('should return an error if there is one', async () => {
      const error = 'there was an error'
      mockInitializeApollo.mockReturnValue({
        query: () => ({ error }),
      })
      const resp = await getUserProfile(true)(context)
      //@ts-ignore
      expect(resp?.props?.error).toBe(error)
    })

    it('should return the queried user', async () => {
      mockInitializeApollo.mockReturnValue({
        query: () => ({ data: { user: ExampleUser } }),
      })
      const resp = await getUserProfile(true)(context)
      //@ts-ignore
      expect(resp?.props?.user).toBe(ExampleUser)
    })
  })
})
