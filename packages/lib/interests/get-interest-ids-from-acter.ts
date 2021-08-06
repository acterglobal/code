import { Acter } from '@acter/schema'

export const getInterestIdsFromActer = (acter: Acter): string[] =>
  acter?.ActerInterests?.map(({ Interest: { id } }) => id) || []
