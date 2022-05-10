import { getAuthMiddleware } from '@acter/lib/api/auth-middleware'
import { API_SECRET_KEY } from '@acter/lib/constants'

export const middleware = getAuthMiddleware(API_SECRET_KEY)
