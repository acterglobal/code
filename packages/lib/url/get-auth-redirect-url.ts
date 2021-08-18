import { NextApiRequest } from 'next'

/**
 * Can be used to get auth redirect url
 * @param req nextjs api request
 * @returns auth redirect url
 */
export const getAuthRedirectUrl = (req: NextApiRequest): string =>
  `${process.env.AUTH0_BASE_URL}${req.query?.redirectTo}`
