import { NextApiHandler } from 'next'

import { handleLogin } from '@auth0/nextjs-auth0'

import { getLogger } from '@acter/lib/logger'
import { getAuthRedirectUrl } from '@acter/lib/url/get-auth-redirect-url'

const l = getLogger('signupHandler')

const signupHandler: NextApiHandler = async (req, res) => {
  try {
    if (!req.query) {
      l.error('Skipping signupHandler because res.query is missing')
      return
    }
    const redirectUrl = getAuthRedirectUrl(req)
    await handleLogin(req, res, {
      authorizationParams: {
        screen_hint: 'signup',
      },
      returnTo: redirectUrl,
    })
  } catch (err) {
    l.error(err)
    res.status?.(err.status || 500).end(err.message)
  }
}

export default signupHandler
