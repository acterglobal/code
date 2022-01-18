import { GraphQLError } from 'graphql'

export const NotAuthorizedError = new GraphQLError('User not authorized')
export const NotLoggedError = new GraphQLError('User not logged')
