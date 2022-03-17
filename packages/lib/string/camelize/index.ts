import camelCase from 'just-camel-case'

export const camelize = (string: string): string => camelCase(string || '')
