import { FC } from 'react'

import { Provider } from 'urql'

import { getUrqlClient } from '@acter/lib/urql'

export const UrqlProvider: FC = ({ children }) => (
  <Provider value={getUrqlClient()}>{children}</Provider>
)
