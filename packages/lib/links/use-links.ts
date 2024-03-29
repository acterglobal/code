import { useQuery, UseQueryArgs, UseQueryState } from 'urql'

import { Link } from '@acter/schema'
import QUERY_LINKS_BY_ACTER from '@acter/schema/queries/links-by-acter.graphql'

type LinksData = {
  links: Link[]
}

type LinksVariables = {
  acterId: string
}

type UseLinksOptions = UseQueryArgs<LinksVariables, LinksData>

type UseLinksParams = {
  acterId: string
  options?: UseLinksOptions
}

type UseLinksResult = Omit<UseQueryState<LinksData, LinksVariables>, 'data'> &
  LinksData

export const useLinks = (params: UseLinksParams): UseLinksResult => {
  const { acterId, options } = params

  const [{ data, fetching, error, ...restQueryResults }] = useQuery<
    LinksData,
    LinksVariables
  >({
    query: QUERY_LINKS_BY_ACTER,
    variables: { acterId },
    pause: !acterId,
    ...options,
  })

  return { links: data?.links || [], fetching, error, ...restQueryResults }
}
