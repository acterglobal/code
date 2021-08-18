import { NextApiHandler } from 'next'
import { handleLogin } from '@auth0/nextjs-auth0'
import { getAuthRedirectUrl } from '@acter/lib/url/get-auth-redirect-url'

const loginHandler: NextApiHandler = async (req, res) => {
  try {
    const redirectUrl = getAuthRedirectUrl(req)

    return handleLogin(req, res, {
      returnTo: redirectUrl,
    })
  } catch (err) {
    console.error(err)
    res.status(err.status || 500).end(err.message)
  }
}

export default loginHandler
