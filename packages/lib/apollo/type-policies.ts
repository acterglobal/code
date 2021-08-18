import { Acter } from '@acter/schema/types'

type SearchResults = Acter[] | []

export const typePolicies = {
  Query: {
    fields: {
      acters: {
        keyArgs: ['where'],
        merge(existing = [], incoming: SearchResults): SearchResults {
          return [...existing, ...incoming]
        },
      },
      searchActivities: {
        keyArgs: ['searchText', 'interests', 'types', 'sortBy'],
        merge(existing = [], incoming: SearchResults): SearchResults {
          return [...existing, ...incoming]
        },
      },
    },
  },
}
