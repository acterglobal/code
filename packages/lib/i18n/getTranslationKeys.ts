import { camelize } from '@acter/lib/string/camelize'

export const getTranslationKey = (keyString: string): string => {
  if (keyString === 'NGO') {
    return keyString
  }

  if (keyString.includes('.')) {
    const separator = keyString.lastIndexOf('.') + 1
    const nestedKeys = keyString.substring(0, separator)
    const lastKey = keyString.slice(separator)

    return nestedKeys.concat(lastKey === 'NGO' ? 'NGO' : camelize(lastKey))
  }

  return camelize(keyString)
}
