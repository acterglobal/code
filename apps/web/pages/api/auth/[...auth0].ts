import { handleAuth, handleCallback, AfterCallback } from '@auth0/nextjs-auth0'

import { getLogger } from '@acter/../packages/lib/logger'
import { getOrCreateActerFromDB } from '@acter/lib/acter/get-or-create-acter-from-db'
import { getOrCreateUserByEmailFromDB } from '@acter/lib/user/get-or-create-user-by-email-from-db'
import { syncAuth0IntercomData } from '@acter/lib/user/sync-auth0-intercom-data'
import { User } from '@acter/schema'

const t = getLogger('Auth0::afterCallback').startTimer()

const afterCallback: AfterCallback = async (_req, res, session, _state) => {
  let userWithActer: User
  try {
    // TODO: check for email_verified
    // TODO: don't implicitly link accounts
    const { email, nickname, sub: auth0ProviderId } = session.user
    const user = await getOrCreateUserByEmailFromDB({
      email,
      auth0ProviderId,
    })
    const acter = await getOrCreateActerFromDB({ user, nickname })

    userWithActer = {
      ...user,
      Acter: acter,
    }
  } catch (error) {
    t.done({
      msg: 'error logging in',
      error,
      level: 'error',
    })
    throw error
  }

  // This function will log its own errors and *should not* result in a 500
  syncAuth0IntercomData({ session, user: userWithActer })

  t.done({ level: 'debug', msg: 'user logged in' })
  return {
    ...session,
    user: userWithActer,
  }
}

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback })
    } catch (error) {
      res.status(error.status || 500).send(error.message)
    }
  },
})
