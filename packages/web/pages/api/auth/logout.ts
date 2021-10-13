import { NextApiHandler } from 'next'

import { handleLogout } from '@auth0/nextjs-auth0'

import { getAuthRedirectUrl } from '@acter/lib/url/get-auth-redirect-url'

const logoutHandler: NextApiHandler = async (req, res) => {
  try {
    // if (!req.query) {
    //   console.error('Skipping logoutHandler because res.query is missing')
    //   return
    // }
    console.log('This is logout')
    const redirectUrl = getAuthRedirectUrl(req)
    await handleLogout(req, res, {
      returnTo: redirectUrl,
    })
  } catch (err) {
    console.error('Failed in logoutHandler:', err)
    res.status?.(err.status || 500).end(err.message)
  }
}

export default logoutHandler
