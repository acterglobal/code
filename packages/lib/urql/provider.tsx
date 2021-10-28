import { FC } from 'react'

import { Provider } from 'urql'

import { urqlClient } from '@acter/lib/urql'

export const UrqlProvider: FC = ({ children }) => (
  <Provider value={urqlClient}>{children}</Provider>
)
