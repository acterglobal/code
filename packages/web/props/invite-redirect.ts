import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { prisma } from '@acter/schema/prisma'

export const inviteRedirect: ComposedGetServerSideProps = async ({
  params,
  props,
}) => {
  if (!params.id) {
    console.error('No id in params', params)
    return {
      props: {},
      notFound: true,
    }
  }

  try {
    const invite = await prisma.invite.findFirst({ where: { id: params.id } })

    if (invite.expiredAt) {
      return {
        props: {
          ...props,
          expiredMessage: 'Sorry, Your invitation is expired.',
        },
      }
    }

    const onActer = await prisma.acter.findFirst({
      where: { id: invite.onActerId },
      include: { ActerType: true },
    })

    const acterUrl = acterAsUrl({ acter: onActer })

    return {
      props,
      redirect: { destination: acterUrl },
    }
  } catch (error) {
    console.error('Error', error)
    return {
      props: {},
      redirect: { destination: '/500' },
    }
  }
}
