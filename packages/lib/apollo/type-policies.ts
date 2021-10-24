import { TypePolicies } from '@apollo/client'

import { Acter } from '@acter/schema'

type SearchResults = Acter[] | []

export const typePolicies: TypePolicies = {
  Query: {
    fields: {
      acters: {
        keyArgs: false,
        merge(existing = [], incoming: SearchResults): SearchResults {
          return [...existing, ...incoming]
        },
      },
      searchActivities: {
        keyArgs: false,
        merge(existing = [], incoming: SearchResults): SearchResults {
          return [...existing, ...incoming]
        },
      },
    },
  },
}
