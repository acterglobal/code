//TODO: (damon) convert to TS when we get the Storybook webpack set up

import { createContext } from 'react'
import { get } from 'lodash'

let sessionLoading
let sessionUser

export const useSession = () => {
  return [
    {
      expires: '',
      user: sessionUser,
    },
    sessionLoading,
  ]
}

export const signIn = () => Promise.resolve()
export const signOut = () => Promise.resolve()
export const Provider = createContext(useSession())

export const decorator = (story, { parameters }) => {
  sessionUser = get(parameters, 'nextAuth.user', null)
  sessionLoading = get(parameters, 'nextAuth.loading', false)
  return story()
}
