import { handleAuth, handleCallback, AfterCallback } from '@auth0/nextjs-auth0'

import { getOrCreateActerFromDB } from '@acter/lib/acter/get-or-create-acter-from-db'
import { getOrCreateUserByEmailFromDB } from '@acter/lib/user/get-or-create-user-by-email-from-db'
import { syncAuth0IntercomData } from '@acter/lib/user/sync-auth0-intercom-data'

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

    syncAuth0IntercomData({ session, user })

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