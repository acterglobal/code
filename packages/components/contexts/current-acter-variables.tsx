import { createContext, FC, useContext, useState } from 'react'

export interface CurrentActerVariables {
  acterId: string
  slug?: string
  acterType?: string
}

export type TCurrentActerContext = [
  variables: CurrentActerVariables,
  setVariables: (variables: CurrentActerVariables) => void
]

const currentActerVariableDefaults: CurrentActerVariables = {
  acterId: null,
}

export const CurrentActerContext = createContext<TCurrentActerContext>([
  currentActerVariableDefaults,
  () => null,
])

export const CurrentActerProvider: FC = (props) => {
  const [variables, setVariables] = useState<CurrentActerVariables>(
    currentActerVariableDefaults
  )

  return (
    <CurrentActerContext.Provider value={[variables, setVariables]}>
      {props.children}
    </CurrentActerContext.Provider>
  )
}

export const useCurrentActerVariables = (): TCurrentActerContext =>
  useContext(CurrentActerContext)
