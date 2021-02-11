import { getToken } from 'src/props/get-token'

import { ExampleUser } from 'src/__fixtures__/user/example-user'

describe('getToken', () => {
  const callGetServerSideProps = async () => {
    return await getToken({
      //@ts-ignore
      req: {},
      //@ts-ignore
      res: {},
      query: {},
      resolvedUrl: '',
    })
  }

  const mockGoodSession = () => {
    require('next-auth/client').__setMockSession({
      user: ExampleUser,
      expires: '',
    })
    require('next-auth/jwt').__setMockToken({
      sub: ExampleUser.id,
      email: ExampleUser.email,
    })
  }

  it('should redirect if there is no session', async () => {
    const resp = await callGetServerSideProps()
    expect(resp.redirect.destination).toBe('/')
  })

  it('should return the session session', async () => {
    const { id, email } = ExampleUser
    require('next-auth/jwt').__setMockToken({ sub: id, email })
    const resp = await callGetServerSideProps()
    expect(resp.props.tokenUser).toStrictEqual({
      id,
      email,
    })
  })
})
