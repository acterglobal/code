import { NextApiRequest, NextApiResponse } from 'next'
import { handleLogin } from '@auth0/nextjs-auth0'
import { getAuthRedirectUrl } from '@acter/lib/url/get-auth-redirect-url'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const redirectUrl = getAuthRedirectUrl(req)

  return handleLogin(req, res, {
    returnTo: redirectUrl,
  })
}
