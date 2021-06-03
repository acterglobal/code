import { handleAuth, handleCallback } from '@auth0/nextjs-auth0'
import { getOrCreateUserByEmailFromDB } from 'src/lib/user/get-or-create-user-by-email-from-db'
import { getOrCreateActerFromDB } from 'src/lib/acter/get-or-create-acter-from-db'

const afterCallback = async (_req, res, session, _state) => {
  try {
    // TODO: check for email_verified
    // TODO: don't implicitly link accounts
    const user = await getOrCreateUserByEmailFromDB(session.user.email)
    await getOrCreateActerFromDB(user)
    return {
      ...session,
      user: {
        ...user,
        sub: session.user.sub,
      },
    }
  } catch (err) {
    res.status(err.status || 500).end(err.message)
  }
}

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback })
    } catch (error) {
      res.status(error.status || 500).end(error.message)
    }
  },
})
