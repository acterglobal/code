import { parseActerTypeName } from '@acter/lib/acter-types/parse-acter-type-name'
import { MainActerTypes, ActerTypes } from '@acter/lib/constants'
import { pluralize } from '@acter/lib/string/pluralize'

/**
 * Parses acter type names to be used for urls
 * @returns array of pluralized & parsed url-friendly acter type names
 */

export const getUrlActerTypes = (): ActerTypes[] => {
  return MainActerTypes.map((type) => {
    return pluralize(parseActerTypeName(type)) as ActerTypes
  })
}
