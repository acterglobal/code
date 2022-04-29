export const getArticle = (input: string): string =>
  input[0].match(/[aeiou]/) ? 'an' : 'a'
