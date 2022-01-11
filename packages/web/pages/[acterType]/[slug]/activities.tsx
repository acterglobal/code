import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { ActerActivities } from '@acter/components/acter/activities'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { getPrivacySettings } from '@acter/lib/acter/get-privacy-settings'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'

export const ActerActivitiesPage: NextPageWithLayout = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const { acter, fetching: acterLoading } = useActer()
  const { user, fetching: userLoading } = useUser()

  const isPrivate = getPrivacySettings(acter)

  const isMember = checkMemberAccess(user, acter)

  // useEffect(() => {
  //   if (!acterLoading && !userLoading) {
  //     if (!user && isPrivate) router.push('/401')
  //     if (!acter) router.push('/404')

  //     if (user && acter) {
  //       if (isPrivate && !isMember) router.push('/403')
  //     }
  //   }
  // }, [acterLoading, acter, userLoading, user])

  useEffect(() => {
    // if (!acterLoading && loading) {
    //   setLoading(acterLoading)
    // }
    // if (acterLoading && !loading) {
    //   setLoading(acterLoading)
    // }
    // if (!acterLoading && loading) {
    //   setLoading(acterLoading)
    // }
    setLoading(acterLoading)
  }, [acterLoading])

  useEffect(() => {
    if (!loading) {
      if (!acter) router.push('/404')
    }
  }, [acter, user, acterLoading])

  if (acterLoading || userLoading) return <LoadingSpinner />

  return (
    <>
      <>
        <Head title={`${acter?.name} Activities - Acter`} />

        <ActerActivities />
      </>
    </>
  )
}

ActerActivitiesPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerActivitiesPage
