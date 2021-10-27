import { useEffect, useState } from 'react'

import { CombinedError, useQuery, UseQueryArgs, UseQueryState } from 'urql'

import { useActer } from '@acter/lib/acter/use-acter'
import { Link } from '@acter/schema'
import QUERY_LINKS_BY_ACTER from '@acter/schema/queries/links-by-acter.graphql'

type LinksData = {
  links: Link[]
}

type LinksVariables = {
  acterId: string
}

type UseLinksOptions = UseQueryArgs<LinksVariables, LinksData>

type UseLinksError = CombinedError | Error
interface UseLinksResult
  extends Omit<UseQueryState<LinksData, LinksVariables>, 'data'> {
  links: Link[]
}
// TODO: DRY useActer in other hooks
export const useLinks = (options?: UseLinksOptions): UseLinksResult => {
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState<UseLinksError>()
  const [links, setLinks] = useState<Link[]>([])
  const { acter, fetching: acterFetching, error: acterError } = useActer()

  const [
    { data, fetching: queryFetching, error: queryError, ...restQueryResults },
  ] = useQuery<LinksData, LinksVariables>({
    query: QUERY_LINKS_BY_ACTER,
    variables: {
      acterId: acter?.id,
    },
    pause: !acter?.id,
    ...options,
  })

  useEffect(() => {
    setFetching(acterFetching || queryFetching)
  }, [acterFetching, queryFetching])

  useEffect(() => {
    if (acterError) return setError(acterError)
    if (queryError) return setError(queryError)
  }, [acterError, queryError])

  useEffect(() => {
    if (data?.links) setLinks(data.links)
  }, [data?.links])

  return { links, fetching, error, ...restQueryResults } as UseLinksResult
}
