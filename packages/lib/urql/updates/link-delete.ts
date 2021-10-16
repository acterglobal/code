import { Data, NullArray, UpdateResolver } from '@urql/exchange-graphcache'

import {LinkWithType} from './create-link'

type LinkData = {
  deleteLink?: LinkWithType
}

export const deleteLink: UpdateResolver<LinkData> = (result, _args, cache, _info) => {
  const queryFields = cache.inspectFields('Query')
  const linkEntityKey = cache.keyOfEntity(result.deleteLink as unknown as Data)
  
  queryFields.forEach(
    ({ fieldName, fieldKey }) => {
      if (fieldName !== 'links') return
      const links = <NullArray<string>>cache.resolve('Query', fieldKey)
      const linksWithoutItem = links.filter((key) => key !== linkEntityKey)
      cache.link('Query', fieldKey, <NullArray<string>>linksWithoutItem)
    }
  )
}
