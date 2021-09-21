import { Session } from '@auth0/nextjs-auth0'

import { User } from '@acter/schema'

export interface SyncAuth0IntercomData {
  session: Session
  user: User
}

export interface IntercomUser {
  id: string
}
