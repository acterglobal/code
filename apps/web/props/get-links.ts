import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { ActerTypes } from '@acter/lib/constants'
import { getUrqlClient } from '@acter/lib/urql'
import QUERY_LINKS_BY_ACTER from '@acter/schema/queries/links-by-acter.graphql'

/**
 *
 * @param ctx.props including the current Acter
 * @returns list of Links
 */
export const getLinks: ComposedGetServerSideProps = async ({ props }) => {
  const { acter } = props
  const { data, error } = await getUrqlClient()
    .query(QUERY_LINKS_BY_ACTER, {
      acterId:
        acter?.ActerType.name === ActerTypes.GROUP
          ? acter?.Parent.id
          : acter?.id,
    })
    .toPromise()
  if (error) {
    return {
      props: {
        error,
      },
    }
  }
  const { links } = data
  if (!links) {
    return {
      props: {},
      notFound: true,
    }
  }
  return {
    props: {
      links,
    },
  }
}
