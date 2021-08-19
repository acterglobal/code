import { NextApiHandler } from 'next'
import { handleLogin } from '@auth0/nextjs-auth0'
import { getAuthRedirectUrl } from '@acter/lib/url/get-auth-redirect-url'

const loginHandler: NextApiHandler = async (req, res) => {
  try {
    const redirectUrl = getAuthRedirectUrl(req)
    console.log('In loginHandler. Redirect URL is ', redirectUrl)
    console.log('req.query is', req.query)
    return handleLogin(req, res, {
      returnTo: redirectUrl,
    })
  } catch (err) {
    console.error('Failed in loginHandler:', err)
    res.status(err.status || 500).end(err.message)
  }
}

export default loginHandler
