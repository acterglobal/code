import { NextApiRequest, NextApiResponse } from 'next'
import { handleLogin } from '@auth0/nextjs-auth0'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    handleLogin(req, res, {
      authorizationParams: {
        screen_hint: 'signup',
      },
    })
  } catch (err) {
    console.error(err)
    res.status(err.status || 500).end(err.message)
  }
}
