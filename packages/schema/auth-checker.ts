import { Session } from '@auth0/nextjs-auth0'
import { AuthChecker } from 'type-graphql'

export const authChecker: AuthChecker<Session> = ({ context }) => {
  return context?.session?.email !== ''
}
