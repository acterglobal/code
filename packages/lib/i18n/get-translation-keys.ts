import { camelize } from '@acter/lib/string/camelize'

const specialKeys = {
  ngo: 'NGO',
  ngos: 'NGOs',
}

export const getTranslationKey = (keyString: string): string => {
  const isSpecialKey = (key) => specialKeys[(key as string).toLocaleLowerCase()]

  if (isSpecialKey(keyString)) {
    return keyString
  }

  const getNestedTranslationKey = (keyString: string): string => {
    const separator = keyString.lastIndexOf('.') + 1
    const nestedKeys = keyString.substring(0, separator)
    const lastKey = keyString.slice(separator)

    return nestedKeys.concat(
      isSpecialKey(lastKey) ? lastKey : camelize(lastKey)
    )
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
