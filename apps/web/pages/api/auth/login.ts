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
    await handleLogin(req, res, {
      returnTo: redirectUrl,
    })
  } catch (err) {
    l.error('Failed in loginHandler:', err)
    res.status?.(err.status || 500).end(err.message)
  }
}

export default loginHandler
