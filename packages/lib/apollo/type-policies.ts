export const typePolicies = {
  Query: {
    fields: {
      acters: {
        keyArgs: false,
        merge(existing = [], incoming) {
          return [...existing, ...incoming]
        },
      },
    },
  },
}
