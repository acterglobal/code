import { ComposedGetServerSideProps } from 'lib/compose-props'
import { initializeApollo } from 'src/lib/apollo'

import { Acter } from '@generated/type-graphql'

import QUERY_ACTER from 'graphql/queries/query-acter-by-slug.graphql'

/**
 *
 * @param ctx.params url params including an Acter slug
 * @param ctx.props including the current ActerType
 * @returns an acter
 */
export const getActer: ComposedGetServerSideProps = async ({
  params,
  props,
}) => {
  if (!props?.acterType?.id || !params?.slug) {
    return {
      props: {},
      notFound: true,
    }
  }

  const apollo = initializeApollo()
  const { data, error } = await apollo.query({
    query: QUERY_ACTER,
    variables: {
      acterTypeId: props.acterType.id,
      slug: params.slug,
    },
  })

  if (error) {
    return {
      props: {
        error,
      },
    }
  }

  const { getActer }: { getActer: Acter } = data
  return {
    props: {
      acter: getActer,
    },
  }
}
