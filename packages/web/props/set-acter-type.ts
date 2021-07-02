import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { acterTypeAsUrl } from '@acter/lib/acter-types/acter-type-as-url'

/**
 * Sets the current ActerType from page params from a list of ActerTypes feteched earlier
 *
 * @param ctx.params page props includiing the current acterType
 * @param ctx.props Contains a list of acterTypes
 * @returns Props with the current ActerType
 */
export const setActerType: ComposedGetServerSideProps = async ({
  params,
  props,
}) => {
  const acterType = props.acterTypes.find(
    (type) => acterTypeAsUrl(type) === params.acterType
  )

  if (!acterType) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      acterType,
    },
  }
}
