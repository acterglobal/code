import { injectable } from 'react-magnetic-di/macro'

import { ActerQueryResult, useActer } from '@acter/lib/acter/use-acter'
import { ExampleActer } from '@acter/lib/fixtures'
import { Acter } from '@acter/schema'

export const acterDefault: Acter = {
  ...ExampleActer,
  ActivitiesOrganized: [],
  Followers: [],
  Following: [],
}

export const useActerDi = (acter = acterDefault): typeof useActer =>
  injectable(
    useActer,
    () =>
      (({
        acter,
        loading: false,
      } as unknown) as ActerQueryResult)
  )
