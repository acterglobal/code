import { parseActerTypeName } from '@acter/lib/acter-types/parse-acter-type-name'
import { pluralize } from '@acter/lib/string/pluralize'
import { ActerType } from '@acter/schema'

/**
 * Make ActerType name url-friendly (lowercase, plural, and slugged)
 * @param acterType The ActerType
 */
export const acterTypeAsUrl = (acterType: ActerType): string =>
  pluralize(parseActerTypeName(acterType.name))
