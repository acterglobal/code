import { UpdateResolver, NullArray } from '@urql/exchange-graphcache'

import { Link } from '@acter/schema'

interface LinkWithType extends Link {
  __typename: string
}

interface LinkData {
  createLink?: LinkWithType
}

interface EqualsId {
  equals: string
}

interface WhereActerId {
  acterId: EqualsId
}

interface FieldArgs {
  where?: WhereActerId
}

export const createLink: UpdateResolver<LinkData> = (
  result,
  _args,
  cache,
  _info
) => {
  const acterId = result.createLink?.Acter?.id
  if (!acterId) return

  const queryFields = cache.inspectFields('Query')
  const acterLinks = queryFields.filter(
    ({ fieldName, arguments: fieldArgs }) => {
      return fieldName === 'links' && (<FieldArgs>fieldArgs).where?.acterId?.equals === acterId
    }
  )

  acterLinks.forEach(({ fieldKey }) => {
    const links = <NullArray<LinkWithType>>cache.resolve('Query', fieldKey)
    links.unshift(result.createLink)
    cache.link('Query', fieldKey, <NullArray<'todo'>>links)
  })
}
