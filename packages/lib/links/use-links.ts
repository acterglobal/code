import { useEffect, useState } from 'react'

import {
  useLazyQuery,
  MutationOptions,
  QueryResult,
  ApolloError,
} from '@apollo/client'

import { useActer } from '@acter/lib/acter/use-acter'
import { Link } from '@acter/schema'
import QUERY_LINKS_BY_ACTER from '@acter/schema/queries/links-by-acter.graphql'

type LinksData = {
  links: Link[]
}

type LinksVarialbles = {
  acterId: string
}

type UseLinksOptions = MutationOptions<LinksData, LinksVarialbles>

interface UseLinksResult
  extends Omit<QueryResult<LinksData, LinksVarialbles>, 'data'> {
  links: Link[]
}
// TODO: DRY useActer in other hooks
export const useLinks = (options?: UseLinksOptions): UseLinksResult => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ApolloError>()
  const [links, setLinks] = useState<Link[]>([])
  const { acter, loading: acterLoading, error: acterError } = useActer()

  const [
    fetchLinks,
    { data, loading: queryLoading, error: queryError, ...restQueryResults },
  ] = useLazyQuery<LinksData, LinksVarialbles>(QUERY_LINKS_BY_ACTER, {
    ...options,
  })

  useEffect(() => {
    setLoading(acterLoading || queryLoading)
  }, [acterLoading, queryLoading])

  useEffect(() => {
    if (acterError) return setError(acterError)
    if (queryError) return setError(queryError)
  }, [acterError, queryError])

  useEffect(() => {
    if (acter?.id)
      fetchLinks({
        variables: {
          acterId: acter.id,
        },
      })
  }, [acter?.id])

  useEffect(() => {
    if (data?.links) setLinks(data.links)
  }, [data?.links])

  return { links, loading, error, ...restQueryResults } as UseLinksResult
}
