import { Acter } from '@acter/schema/types'

export const getInterestIdsFromActer = (acter: Acter): string[] =>
  acter?.ActerInterests?.map(({ Interest: { id } }) => id) || []
