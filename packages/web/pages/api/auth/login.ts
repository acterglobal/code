import { NextApiRequest, NextApiResponse } from 'next'
import { handleLogin } from '@auth0/nextjs-auth0'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const redirectUrl = process.env.AUTH0_BASE_URL + req.query.redirectTo

    handleLogin(req, res, {
      returnTo: redirectUrl,
    })
  } catch (err) {
    console.error(err)
    res.status(err.status || 500).end(err.message)
  }
}
