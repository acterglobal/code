import { NextApiRequest } from 'next'

/**
 * Can be used to get auth redirect url
 * @param req nextjs api request
 * @returns auth redirect url
 */
export const getAuthRedirectUrl = (req: NextApiRequest): string => {
  const returnTo = req.query?.returnTo
  if (Array.isArray(returnTo)) {
    return returnTo.join('')
  }
  return returnTo
}
