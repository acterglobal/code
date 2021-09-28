import { NextApiHandler } from 'next'

import { handleLogin } from '@auth0/nextjs-auth0'

import { getAuthRedirectUrl } from '@acter/lib/url/get-auth-redirect-url'

const loginHandler: NextApiHandler = async (req, res) => {
  try {
    if (!req.query) {
      console.error('Skipping loginHandler because res.query is missing')
      return
    }
    const redirectUrl = getAuthRedirectUrl(req)
    await handleLogin(req, res, {
      returnTo: redirectUrl,
      authorizationParams: {
        response_type: 'code',
        scope: 'openid profile email',
      },
    })
  } catch (err) {
    console.error('Failed in loginHandler:', err)
    res.status?.(err.status || 500).end(err.message)
  }
}

export default loginHandler
