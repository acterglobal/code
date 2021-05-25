import slugify from 'slugify'

/**
 * creates the slug with acter name and its parent slug(if exist)
 * @param acterName acter name
 * @param parentActerSlug parent acter slug (we need this for sub groups)
 * @returns string (slug)
 */
export const createSlug = (
  acterName: string,
  parentActerSlug: string | null = null
): string => {
  let slugifyString: string

  if (parentActerSlug) {
    slugifyString = parentActerSlug + ' '
  }
  slugifyString += acterName.toLocaleLowerCase()

  return slugify(slugifyString)
}
