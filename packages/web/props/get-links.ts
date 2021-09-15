import { initializeApollo, addApolloState } from '@acter/lib/apollo'
import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { ActerTypes } from '@acter/lib/constants'
import QUERY_LINKS_BY_ACTER from '@acter/schema/queries/links-by-acter.graphql'

/**
 *
 * @param ctx.props including the current Acter
 * @returns list of Links
 */
export const getLinks: ComposedGetServerSideProps = async ({ props }) => {
  const { acter } = props
  const apollo = initializeApollo()
  const { data, error } = await apollo.query({
    query: QUERY_LINKS_BY_ACTER,
    variables: {
      acterId:
        acter?.ActerType.name === ActerTypes.GROUP
          ? acter?.Parent.id
          : acter?.id,
    },
  })
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
  return addApolloState(apollo, {
    props: {
      links,
    },
  })
}
