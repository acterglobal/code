import { camelize } from '@acter/lib/string/camelize'

export const getTranslationKey = (keyString: string): string => {
  if (keyString === 'NGO' || keyString === 'NGOs') {
    return keyString
  }

  const getNestedTranslationKey = (keyString: string): string => {
    const separator = keyString.lastIndexOf('.') + 1
    const nestedKeys = keyString.substring(0, separator)
    const lastKey = keyString.slice(separator)

    if (lastKey === 'NGO' || lastKey === 'NGOs') {
      return nestedKeys.concat(lastKey)
    }

    return nestedKeys.concat(camelize(lastKey))
  }

  if (keyString.includes(':')) {
    const indexOfColon = keyString.indexOf(':') + 1
    const namespace = keyString.substring(0, indexOfColon)
    const key = keyString.slice(indexOfColon)
    const translationKey = getNestedTranslationKey(key)
    return `${namespace}${translationKey}`
  }

  if (keyString.includes('.')) {
    return getNestedTranslationKey(keyString)
  }

  return camelize(keyString)
}
