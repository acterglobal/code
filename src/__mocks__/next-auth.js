//TODO: (damon) convert to TS when we get the Storybook webpack set up

import { createContext } from 'react'

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
  sessionUser = parameters?.nextAuth?.user
  sessionLoading = parameters?.nextAuth?.loading
  return story()
}
