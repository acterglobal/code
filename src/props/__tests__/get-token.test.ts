import { getToken } from 'src/props/get-token'

import { ExampleUser } from 'src/__fixtures__'
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

  it('should redirect if there is no session', async () => {
    const resp = await callGetServerSideProps()
    //@ts-ignore
    expect(resp.redirect.destination).toBe('/')
  })

  it('should return the session session', async () => {
    const { id, email } = ExampleUser
    // eslint-disable-next-line
    require('next-auth/jwt').__setMockToken({ sub: id, email })
    const resp = await callGetServerSideProps()
    //@ts-ignore
    expect(resp.props.tokenUser).toStrictEqual({
      id,
      email,
    })
  })
})
