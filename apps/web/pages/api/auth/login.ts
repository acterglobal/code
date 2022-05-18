import { NextApiHandler } from 'next'

import { handleLogin } from '@auth0/nextjs-auth0'

import { getLogger } from '@acter/lib/logger'
import { getAuthRedirectUrl } from '@acter/lib/url/get-auth-redirect-url'

const l = getLogger('loginHandler')

const loginHandler: NextApiHandler = async (req, res) => {
  try {
    if (!req.query) {
      l.error('Skipping loginHandler because res.query is missing')
      return
    }
    const redirectUrl = getAuthRedirectUrl(req)
    l.debug(
      {
        VERCEL_URL: process.env.VERCEL_URL,
        BASE_URL: process.env.BASE_URL,
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
        AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
        AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
        AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
        redirectUrl,
      },
      'Processing login with'
    )
    await handleLogin(req, res, {
      returnTo: redirectUrl,
    })
  } catch (err) {
    l.error('Login failed', err)
    res.status?.(err.status || 500).end(err.message)
  }
}

export default loginHandler
