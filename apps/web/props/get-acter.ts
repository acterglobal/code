import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { getUrqlClient } from '@acter/lib/urql'
import { Acter } from '@acter/schema'
import QUERY_ACTER from '@acter/schema/queries/acter-by-slug.graphql'

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

  const { data, error } = await getUrqlClient()
    .query(QUERY_ACTER, {
      acterTypeId: props.acterType.id,
      slug: params.slug,
    })
    .toPromise()

  if (error) {
    return {
      props: {
        error,
      },
    }
  }

  const { findFirstActer: acter }: { findFirstActer: Acter } = data

  if (!acter) {
    return {
      props: {},
      notFound: true,
    }
  }

  return {
    props: {
      acter,
    },
  }
}
