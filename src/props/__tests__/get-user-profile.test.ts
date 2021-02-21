import { getUserProfile } from 'src/props'

import { ExampleUser } from 'src/__fixtures__/user/example-user'

let mockQueryResponse = {
  loading: false,
  error: null,
  data: {},
}
jest.mock('src/lib/apollo', () => ({
  initializeApollo: () => ({
    query: () => mockQueryResponse,
  }),
}))

const tokenUser = {
  email: 'foo@example.com',
}

describe('getUserProfile', () => {
  const callGetServerSideProps = async (props = {}) => {
    return await getUserProfile({
      //@ts-ignore
      req: {},
      //@ts-ignore
      res: {},
      query: {},
      resolvedUrl: '',
      props,
    })
  }

  beforeEach(() => {
    // eslint-disable-next-line
    require('next-auth/client').__setMockSession({
      user: null,
      expires: '',
    })

    // eslint-disable-next-line
    require('next-auth/jwt').__setMockToken({})

    mockQueryResponse = {
      loading: false,
      error: null,
      data: {},
    }
  })

  it('should redirect if there is no session', async () => {
    const resp = await callGetServerSideProps()
    //@ts-ignore
    expect(resp.redirect.destination).toBe('/')
  })

  it('should return loading while query is in process', async () => {
    mockQueryResponse = {
      ...mockQueryResponse,
      loading: true,
    }
    const resp = await callGetServerSideProps({ tokenUser })
    //@ts-ignore
    expect(resp?.props?.loading).toBe(true)
  })

  it('should return an error if there is one', async () => {
    const errorString = 'there was an error'
    mockQueryResponse = {
      ...mockQueryResponse,
      error: errorString,
    }
    const resp = await callGetServerSideProps({ tokenUser })
    //@ts-ignore
    expect(resp?.props?.error).toBe(errorString)
  })

  it('should return undefined if no user is found', async () => {
    const resp = await callGetServerSideProps({ tokenUser })
    //@ts-ignore
    expect(resp?.props?.user).toBe(undefined)
  })

  it('should return the queried user', async () => {
    mockQueryResponse = {
      ...mockQueryResponse,
      data: {
        user: ExampleUser,
      },
    }
    const resp = await callGetServerSideProps({ tokenUser })
    //@ts-ignore
    expect(resp?.props?.user).toBe(ExampleUser)
  })
})
