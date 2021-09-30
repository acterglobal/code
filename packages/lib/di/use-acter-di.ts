import { injectable } from 'react-magnetic-di'

import { ActerQueryResult, useActer } from '@acter/lib/acter/use-acter'
import { Acter } from '@acter/schema'
import { ExampleActer } from '@acter/schema/fixtures'

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
