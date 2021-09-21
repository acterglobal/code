export const getArticle = (input: string): string =>
  input.substr(0, 1).match(/[aeiou]/) ? 'an' : 'a'
