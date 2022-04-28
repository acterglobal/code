import 'reflect-metadata'

import { Session } from '@auth0/nextjs-auth0'

import { ManagementClient } from 'auth0'
import axios from 'axios'
import { assert } from 'console'
import { getUnixTime } from 'date-fns'

import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'
import { User } from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

export interface SyncAuth0IntercomData {
  session: Session
  user: User
}

export interface IntercomUser {
  id: string
}

export const syncAuth0IntercomData = async ({
  session,
  user,
}: SyncAuth0IntercomData): Promise<void> => {
  assert(!!process.env.INTERCOM_ACCESS_TOKEN, 'Intercom access token missing')
  assert(
    !!process.env.AUTH0_MANAGEMENT_API_URL,
    'Auth0 management API URL missing'
  )
  assert(!!process.env.AUTH0_CLIENT_ID, 'Auth0 client ID missing')
  assert(!!process.env.AUTH0_CLIENT_SECRET, 'Auth0 client secret missing')

  const intercomUser = await syncIntercomData({ user, session })
  await syncIntercomToAuth0({ session, intercomUser })
  await syncWithDb({ user, intercomUser })
}

const syncIntercomData = async ({
  user,
  session,
}: SyncAuth0IntercomData): Promise<IntercomUser> => {
  const now = new Date().getTime()
  const headers = {
    Authorization: `Bearer ${process.env.INTERCOM_ACCESS_TOKEN}`,
  }
  const baseUrl = 'https://api.intercom.io/contacts'
  const data = {
    role: 'user',
    external_id: user.id,
    email: user.email,
    last_seen_at: getUnixTime(now),
    signed_up_at: getUnixTime(parseDateOrString(user.Acter.createdAt)),
    name: user.Acter.name,
    custom_attributes: {
      auth0ProviderId: session.user.sub,
    },
  }

  let userReq
  try {
    userReq = await axios({
      method: 'POST',
      url: `${baseUrl}/search`,
      headers,
      data: {
        query: {
          field: 'external_id',
          operator: '=',
          value: user.id,
        },
      },
    })
  } catch (e) {
    console.error(e)
  }

  try {
    const isCreate = userReq.data.total_count === 0
    const url = isCreate ? baseUrl : `${baseUrl}/${userReq.data.data[0].id}`
    const method = isCreate ? 'POST' : 'PUT'
    const userUpsert = await axios({
      headers,
      method,
      url,
      data,
    })
    if (!userUpsert.data) {
      console.error(`No data from POST to ${url}`, data)
      return null
    }
    return userUpsert.data as IntercomUser
  } catch (e) {
    console.error(e)
  }
}

type SyncIntercomToAuth0Params = Pick<SyncAuth0IntercomData, 'session'> & {
  intercomUser: IntercomUser
}

const syncIntercomToAuth0 = async ({
  session,
  intercomUser,
}: SyncIntercomToAuth0Params): Promise<void> => {
  const auth0 = new ManagementClient({
    domain: process.env.AUTH0_MANAGEMENT_API_URL,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
  })

  let auth0User
  try {
    auth0User = await auth0.getUser({ id: session.user.sub })
  } catch (e) {
    console.error(e)
    return
  }

  await auth0.updateUser(
    {
      id: auth0User.user_id,
    },
    {
      app_metadata: {
        ...auth0User.app_metadata,
        intercomId: intercomUser.id,
      },
    }
  )
}

type SyncWithDbParams = Pick<SyncAuth0IntercomData, 'user'> &
  Pick<SyncIntercomToAuth0Params, 'intercomUser'>

const syncWithDb = async ({ user, intercomUser }: SyncWithDbParams) => {
  await prisma.user.update({
    data: {
      intercomId: intercomUser.id,
    },
    where: {
      id: user.id,
    },
  })
}
