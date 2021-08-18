import { NextApiRequest, NextApiResponse } from 'next'
import { handleLogin } from '@auth0/nextjs-auth0'
import { getAuthRedirectUrl } from '@acter/lib/url/get-auth-redirect-url'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const redirectUrl = getAuthRedirectUrl(req)

    handleLogin(req, res, {
      authorizationParams: {
        screen_hint: 'signup',
      },
      returnTo: redirectUrl,
    })
  } catch (err) {
    console.error(err)
    res.status(err.status || 500).end(err.message)
  }
}
