import { Context, createContext } from 'react'
import { Session, signIn, signOut } from 'next-auth/client'

export interface SessionContext {
  session?: Session
  signInAction: () => Promise<void>
  signOutAction: () => Promise<void>
}

export const SessionContext: Context<SessionContext> = createContext({
  signInAction: signIn,
  signOutAction: signOut,
})
