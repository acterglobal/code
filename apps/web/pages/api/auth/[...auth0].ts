import { handleAuth, handleCallback, AfterCallback } from '@auth0/nextjs-auth0'

import { syncAuth0IntercomQueue } from '@acter/jobs-old/src/sync-auth0-intercom-data'
import { getOrCreateActerFromDB } from '@acter/lib/acter/get-or-create-acter-from-db'
import { getOrCreateUserByEmailFromDB } from '@acter/lib/user/get-or-create-user-by-email-from-db'

const afterCallback: AfterCallback = async (_req, res, session, _state) => {
  try {
    // TODO: check for email_verified
    // TODO: don't implicitly link accounts
    const { email, nickname, sub: auth0ProviderId } = session.user
    const user = await getOrCreateUserByEmailFromDB({
      email,
      auth0ProviderId,
    })
    const acter = await getOrCreateActerFromDB({ user, nickname })

    const userWithActer = {
      ...user,
      Acter: acter,
      sub: session.user.sub,
    }

    syncAuth0IntercomQueue.add(`user-login-${user.id}`, {
      user: userWithActer,
      session,
    })

    return {
      ...session,
      user: userWithActer,
    }
  } catch (err) {
    res.status(err.status || 500)
    res.send(err.message)
  }
}

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback })
    } catch (error) {
      res.status(error.status || 500)
      res.send(error.message)
    }
  },
})
