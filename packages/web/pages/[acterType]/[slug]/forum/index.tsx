import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { ActerPosts } from '@acter/components/acter/posts'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { getPrivacySettings } from '@acter/lib/acter/get-privacy-settings'
import { useActer } from '@acter/lib/acter/use-acter'
import { useActerTitle } from '@acter/lib/acter/use-title'
import {
  ComposedGetServerSideProps,
  composeProps,
} from '@acter/lib/compose-props'
import { useUser } from '@acter/lib/user/use-user'
import { Acter, User, ActerConnectionRole } from '@acter/schema'
import {
  checkRole,
  getActer,
  getActerTypes,
  getUserProfile,
  setActerType,
} from '@acter/web/props'

interface ActerPostsPageProps {
  acter: Acter
  user: User
}

export const ActerPostsPage: NextPageWithLayout<ActerPostsPageProps> = ({
  acter,
  user,
}) => {
  const router = useRouter()
  const { title } = useActerTitle('forum')
  // const { user, fetching: userLoading } = useUser()
  // const { acter, fetching: acterLoading } = useActer()

  const isPrivate = getPrivacySettings(acter)

  // const isMember = checkMemberAccess(user, acter)
  // Look at invites table email onActerId,
  // Invitation page
  // const isPendingMember = userHasRoleOnActer(
  //   user,
  //   ActerConnectionRole.PENDING,
  //   acter
  // )

  // useEffect(() => {
  //   if (!acterLoading && !userLoading) {
  //     if (user && acter) {
  //       if (isPrivate && !isMember) router.push('/403')
  //     }
  //     // if (!user && isPrivate) router.push('/401')
  //     if (!acter) router.push('/404')
  //   }
  // }, [acterLoading, acter, userLoading, user])

  // if (acterLoading || userLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={title} />
      <ActerPosts />
    </>
  )
}

ActerPostsPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(
    ctx,
    getActerTypes,
    setActerType,
    getActer,
    getUserProfile(false),
    checkRole(ActerConnectionRole.MEMBER)
  )

export default ActerPostsPage
