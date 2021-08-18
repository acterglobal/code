import { NextApiHandler } from 'next'
import { handleLogin } from '@auth0/nextjs-auth0'
import { getAuthRedirectUrl } from '@acter/lib/url/get-auth-redirect-url'

const signupHandler: NextApiHandler = async (req, res) => {
  try {
    return handleLogin(req, res, {
      authorizationParams: {
        screen_hint: 'signup',
      },
      returnTo: getAuthRedirectUrl(req),
    })
  } catch (err) {
    console.error(err)
    res.status(err.status || 500).end(err.message)
  }
}

export default signupHandler
